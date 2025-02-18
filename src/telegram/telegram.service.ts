

import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { WeatherService } from '../weather/weather.service';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber } from './subscriber.schema';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf;
  private botInfo: any; // Store bot info

  constructor(
    private readonly weatherService: WeatherService,
    @InjectModel(Subscriber.name) private readonly subscriberModel: Model<Subscriber>,
  ) {
    const botToken = 'YOUR_BOT_TOKEN'; // Fetch the token from environment variables
    if (!botToken) {
      throw new Error('TELEGRAM_BOT_TOKEN is not defined');
    }
    this.bot = new Telegraf(botToken);
  }

  async onModuleInit() {
    // Get bot information
    this.botInfo = await this.bot.telegram.getMe();
    console.log('Bot Info:', this.botInfo);

    this.bot.start((ctx) => {
      console.log('Received /start command');
      ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
    });

    this.bot.command('subscribe', async (ctx) => {
      console.log('Received /subscribe command');
      const message = ctx.message.text;
      const city = message.split(' ')[1];

      if (!city) {
        ctx.reply('Please provide a city. Usage: /subscribe <city>');
        return;
      }

      const chatId = ctx.chat.id;
      const first_name = ctx.from.first_name ?? 'unknown';
      const username = ctx.from.username ?? 'unknown';
      const botUsername = this.botInfo.username;
      const botId = this.botInfo.id;

      // console.log('First Name:', first_name);
      // console.log('Username:', username);
      // console.log('Bot Username:', botUsername);
      // console.log('Bot ID:', botId);

      const existingSubscriber = await this.subscriberModel.findOne({ chatId }).exec();

      if (existingSubscriber) {
        console.log('Existing subscriber found:', existingSubscriber);
        existingSubscriber.city = city;
        existingSubscriber.first_name = first_name;
        existingSubscriber.username = username;
        existingSubscriber.botId = botId;
        if (existingSubscriber.blocked) {
          ctx.reply('You are currently blocked and cannot subscribe.');
        } else {
          await existingSubscriber.save();
          ctx.reply(`Updated subscription to daily weather updates for ${city}.`);
        }
      } else {
        console.log('No existing subscriber found, creating new one');
        const subscriber = new this.subscriberModel({ chatId, city, first_name, username, blocked: false, botId });
        await subscriber.save();
        
        // Fetch current weather data
        const weatherData = await this.weatherService.getWeather(city);
        const message = `Subscribed to daily weather updates for ${city}! The current weather in *${city}* is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*. You will receive daily weather updates every morning at 7:00 AM.`;
        
        ctx.reply(message, { parse_mode: 'Markdown' });
        
        // Debugging: Log the subscriber to verify it's saved correctly
        console.log('New Subscriber:', subscriber);
      }
    });

    this.bot.command('unsubscribe', async (ctx) => {
      console.log('Received /unsubscribe command');
      const chatId = ctx.chat.id;
      await this.subscriberModel.deleteOne({ chatId }).exec();
      ctx.reply('You have been unsubscribed.');
    });

    // Block user command
    this.bot.command('block', async (ctx) => {
      console.log('Received /block command');
      const chatId = ctx.chat.id;
      const subscriber = await this.subscriberModel.findOne({ chatId }).exec();
      if (subscriber) {
        subscriber.blocked = true;
        await subscriber.save();
        ctx.reply('You have been blocked from receiving updates.');
      } else {
        ctx.reply('You are not subscribed.');
      }
    });

    // Unblock user command
    this.bot.command('unblock', async (ctx) => {
      console.log('Received /unblock command');
      const chatId = ctx.chat.id;
      const subscriber = await this.subscriberModel.findOne({ chatId }).exec();
      if (subscriber) {
        subscriber.blocked = false;
        await subscriber.save();
        ctx.reply('You have been unblocked and can now subscribe again.');
      } else {
        ctx.reply('You are not subscribed.');
      }
    });

    this.bot.launch();
  }

  async sendMessage(chatId: number, message: string): Promise<void> {
    try {
      // console.log(`Sending message to ${chatId}: ${message}`);
      await this.bot.telegram.sendMessage(chatId, message);
    } catch (error) {
      console.error(`Failed to send message to ${chatId}:`, error);
    }
  }

  @Cron('0 7 * * *')
  async sendDailyUpdates() {
    console.log('Sending daily updates');
    const subscribers = await this.subscriberModel.find().exec();

    for (const subscriber of subscribers) {
      if (subscriber.blocked) {
        console.log(`Skipping blocked subscriber: ${subscriber.chatId}`);
        continue; // Skip blocked subscribers
      }

      const { chatId, city } = subscriber;

      try {
        const weatherData = await this.weatherService.getWeather(city);
        const message = `Good morning! The weather in *${city}* today is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*.`;
        await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
        console.log(`Sent weather update to ${chatId}`);
      } catch (error) {
        console.error(`Failed to send weather update to ${chatId}:`, error);
      }
    }
  }
}

// // import { Injectable, OnModuleInit } from '@nestjs/common';
// // import { Telegraf } from 'telegraf';
// // import { WeatherService } from '../weather/weather.service';
// // import { Cron } from '@nestjs/schedule';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { Repository } from 'typeorm';
// // import { Subscriber } from './subscriber.entity';

// // @Injectable()
// // export class TelegramService implements OnModuleInit {
// //   private bot: Telegraf;

// //   constructor(
// //     private readonly weatherService: WeatherService,
// //     @InjectRepository(Subscriber)
// //     private readonly subscriberRepository: Repository<Subscriber>,
// //   ) {
// //     this.bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');
// //   }

// //   onModuleInit() {
// //     // Start command
// //     this.bot.start((ctx) => {
// //       ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
// //     });

// //     // Subscribe command
// //     this.bot.command('subscribe', async (ctx) => {
// //       const message = ctx.message.text;
// //       const city = message.split(' ')[1];

// //       if (!city) {
// //         ctx.reply('Please provide a city. Usage: /subscribe <city>');
// //         return;
// //       }

// //       const chatId = ctx.chat.id;

// //       const existingSubscriber = await this.subscriberRepository.findOne({ chatId });

// //       if (existingSubscriber) {
// //         ctx.reply('You are already subscribed.');
// //       } else {
// //         const subscriber = this.subscriberRepository.create({ chatId, city });
// //         await this.subscriberRepository.save(subscriber);
// //         ctx.reply(`Subscribed to daily weather updates for ${city}!`);
// //       }
// //     });

// //     // Unsubscribe command
// //     this.bot.command('unsubscribe', async (ctx) => {
// //       const chatId = ctx.chat.id;
// //       await this.subscriberRepository.delete({ chatId });
// //       ctx.reply('You have been unsubscribed.');
// //     });

// //     // Launch the bot
// //     this.bot.launch();
// //   }

// //   // Scheduled task for sending daily updates
// //   @Cron('0 7 * * *') // Runs every day at 07:00 AM
// //   async sendDailyUpdates() {
// //     const subscribers = await this.subscriberRepository.find();

// //     for (const subscriber of subscribers) {
// //       const { chatId, city } = subscriber;

// //       try {
// //         const weatherData = await this.weatherService.getWeather(city);
// //         const message = `Good morning! The weather in *${city}* today is _${weatherData.weather[0].description}_ with a temperature of *${weatherData.main.temp}°C*.`;
// //         await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// //       } catch (error) {
// //         console.error(`Failed to send weather update to ${chatId}:`, error);
// //       }
// //     }
// //   }
// // }


// // import { Injectable, OnModuleInit } from '@nestjs/common';
// // import { Telegraf } from 'telegraf';
// // import { WeatherService } from '../weather/weather.service';
// // import { Cron } from '@nestjs/schedule';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { Repository } from 'typeorm';
// // import { Subscriber } from './subscriber.entity';

// // @Injectable()
// // export class TelegramService implements OnModuleInit {
// //   private bot: Telegraf;

// //   constructor(
// //     private readonly weatherService: WeatherService,
// //     @InjectRepository(Subscriber)
// //     private readonly subscriberRepository: Repository<Subscriber>,
// //   ) {
// //     this.bot = new Telegraf('8039005794:AAEMFe8tJxg826tU4RIXGswziwOwoLs3MbE');
// //   }

// //   onModuleInit() {
// //     this.bot.start((ctx) => {
// //       ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
// //     });

// //     this.bot.command('subscribe', async (ctx) => {
// //       const message = ctx.message.text;
// //       const city = message.split(' ')[1];

// //       if (!city) {
// //         ctx.reply('Please provide a city. Usage: /subscribe <city>');
// //         return;
// //       }

// //       const chatId = ctx.chat.id;
// //       const existingSubscriber = await this.subscriberRepository.findOne({ where: { chatId } });

// //       if (existingSubscriber) {
// //         existingSubscriber.city = city;
// //         await this.subscriberRepository.save(existingSubscriber);
// //         ctx.reply(`Updated subscription to daily weather updates for ${city}.`);
// //       } else {
// //         const subscriber = this.subscriberRepository.create({ chatId, city });
// //         await this.subscriberRepository.save(subscriber);
// //         ctx.reply(`Subscribed to daily weather updates for ${city}!`);
// //       }
// //     });

// //     this.bot.command('unsubscribe', async (ctx) => {
// //       const chatId = ctx.chat.id;
// //       await this.subscriberRepository.delete({ chatId });
// //       ctx.reply('You have been unsubscribed.');
// //     });

// //     this.bot.launch();
// //   }

// //   @Cron('0 7 * * *')
// //   async sendDailyUpdates() {
// //     const subscribers = await this.subscriberRepository.find();

// //     for (const subscriber of subscribers) {
// //       const { chatId, city } = subscriber;

// //       try {
// //         const weatherData = await this.weatherService.getWeather(city);
// //         const message = `Good morning! The weather in *${city}* today is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*.`;
// //         await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// //       } catch (error) {
// //         console.error(`Failed to send weather update to ${chatId}:`, error);
// //       }
// //     }
// //   }
// // }


// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { Telegraf } from 'telegraf';
// import { WeatherService } from '../weather/weather.service';
// import { Cron } from '@nestjs/schedule';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subscriber } from './subscriber.entity';

// @Injectable()
// export class TelegramService implements OnModuleInit {
//   private bot: Telegraf;

//   constructor(
//     private readonly weatherService: WeatherService,
//     @InjectRepository(Subscriber)
//     private readonly subscriberRepository: Repository<Subscriber>,
//   ) {
//     this.bot = new Telegraf('8039005794:AAEMFe8tJxg826tU4RIXGswziwOwoLs3MbE');
//   }

//   onModuleInit() {
//     this.bot.start((ctx) => {
//       ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
//     });

//     this.bot.command('subscribe', async (ctx) => {
//       const message = ctx.message.text;
//       const city = message.split(' ')[1];

//       if (!city) {
//         ctx.reply('Please provide a city. Usage: /subscribe <city>');
//         return;
//       }

//       const chatId = ctx.chat.id;
//       const first_name = ctx.from.first_name;
//       const username = ctx.from.username;
//       console.log(first_name,"first_name");
//       const existingSubscriber = await this.subscriberRepository.findOne({ where: { chatId } });

//       if (existingSubscriber) {
//         existingSubscriber.city = city;
//         existingSubscriber.first_name = first_name ?? 'unknown';
//         existingSubscriber.username = username ?? 'unknown';
//         await this.subscriberRepository.save(existingSubscriber);
//         ctx.reply(`Updated subscription to daily weather updates for ${city}.`);
//       } else {
//         const subscriber = this.subscriberRepository.create({ chatId, city,first_name,username });
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply(`Subscribed to daily weather updates for ${city}!`);
//       }
//     });

//     this.bot.command('unsubscribe', async (ctx) => {
//       const chatId = ctx.chat.id;
//       await this.subscriberRepository.delete({ chatId });
//       ctx.reply('You have been unsubscribed.');
//     });

//     this.bot.launch();
//   }

//   @Cron('0 7 * * *')
//   async sendDailyUpdates() {
//     const subscribers = await this.subscriberRepository.find();

//     for (const subscriber of subscribers) {
//       const { chatId, city } = subscriber;

//       try {
//         const weatherData = await this.weatherService.getWeather(city);
//         const message = `Good morning! The weather in *${city}* today is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*.`;
//         await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
//       } catch (error) {
//         console.error(`Failed to send weather update to ${chatId}:`, error);
//       }
//     }
//   }
// }


// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { Telegraf } from 'telegraf';
// import { WeatherService } from '../weather/weather.service';
// import { Cron } from '@nestjs/schedule';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subscriber } from './subscriber.entity';

// @Injectable()
// export class TelegramService implements OnModuleInit {
//   private bot: Telegraf;

//   constructor(
//     private readonly weatherService: WeatherService,
//     @InjectRepository(Subscriber)
//     private readonly subscriberRepository: Repository<Subscriber>,
//   ) {
//     this.bot = new Telegraf('8039005794:AAEMFe8tJxg826tU4RIXGswziwOwoLs3MbE');
//   }

//   onModuleInit() {
//     this.bot.start((ctx) => {
//       ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
//     });

//     this.bot.command('subscribe', async (ctx) => {
//       const message = ctx.message.text;
//       const city = message.split(' ')[1];

//       if (!city) {
//         ctx.reply('Please provide a city. Usage: /subscribe <city>');
//         return;
//       }

//       const chatId = ctx.chat.id;
//       const first_name = ctx.from.first_name ?? 'unknown';
//       const username = ctx.from.username ?? 'unknown';

//       console.log(first_name, "first_name");
//       console.log(username, "username");

//       const existingSubscriber = await this.subscriberRepository.findOne({ where: { chatId } });

//       if (existingSubscriber) {
//         existingSubscriber.city = city;
//         existingSubscriber.first_name = first_name;
//         existingSubscriber.username = username;
//         if (existingSubscriber.blocked) {
//           ctx.reply('You are currently blocked and cannot subscribe.');
//         } else {
//           await this.subscriberRepository.save(existingSubscriber);
//           ctx.reply(`Updated subscription to daily weather updates for ${city}.`);
//         }
//       } else {
//         const subscriber = this.subscriberRepository.create({ chatId, city, first_name, username, blocked: false });
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply(`Subscribed to daily weather updates for ${city}!`);
//       }
//     });

//     this.bot.command('unsubscribe', async (ctx) => {
//       const chatId = ctx.chat.id;
//       await this.subscriberRepository.delete({ chatId });
//       ctx.reply('You have been unsubscribed.');
//     });

//     // Block user command
//     this.bot.command('block', async (ctx) => {
//       const chatId = ctx.chat.id;
//       const subscriber = await this.subscriberRepository.findOne({ where: { chatId } });
//       if (subscriber) {
//         subscriber.blocked = true;
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply('You have been blocked from receiving updates.');
//       } else {
//         ctx.reply('You are not subscribed.');
//       }
//     });

//     // Unblock user command
//     this.bot.command('unblock', async (ctx) => {
//       const chatId = ctx.chat.id;
//       const subscriber = await this.subscriberRepository.findOne({ where: { chatId } });
//       if (subscriber) {
//         subscriber.blocked = false;
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply('You have been unblocked and can now subscribe again.');
//       } else {
//         ctx.reply('You are not subscribed.');
//       }
//     });

//     this.bot.launch();
//   }

//   @Cron('0 7 * * *')
//   async sendDailyUpdates() {
//     const subscribers = await this.subscriberRepository.find();

//     for (const subscriber of subscribers) {
//       if (subscriber.blocked) {
//         continue; // Skip blocked subscribers
//       }

//       const { chatId, city } = subscriber;

//       try {
//         const weatherData = await this.weatherService.getWeather(city);
//         const message = `Good morning! The weather in *${city}* today is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*.`;
//         await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
//       } catch (error) {
//         console.error(`Failed to send weather update to ${chatId}:`, error);
//       }
//     }
//   }
// }


// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { Telegraf } from 'telegraf';
// import { WeatherService } from '../weather/weather.service';
// import { Cron } from '@nestjs/schedule';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subscriber } from './subscriber.schema';

// @Injectable()
// export class TelegramService implements OnModuleInit {
//   private bot: Telegraf;

//   constructor(
//     private readonly weatherService: WeatherService,
//     @InjectRepository(Subscriber)
//     private readonly subscriberRepository: Repository<Subscriber>,
//   ) {
//     this.bot = new Telegraf('8039005794:AAEMFe8tJxg826tU4RIXGswziwOwoLs3MbE');
//   }

//   onModuleInit() {
//     this.bot.start((ctx) => {
//       ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
//     });

//     this.bot.command('subscribe', async (ctx) => {
//       const message = ctx.message.text;
//       const city = message.split(' ')[1];

//       if (!city) {
//         ctx.reply('Please provide a city. Usage: /subscribe <city>');
//         return;
//       }

//       const chatId = ctx.chat.id;
//       const first_name = ctx.from.first_name ?? 'unknown';
//       const username = ctx.from.username ?? 'unknown';

//       console.log(first_name, "first_name");
//       console.log(username, "username");

//       const existingSubscriber = await this.subscriberRepository.findOne({ where: { chatId } });

//       if (existingSubscriber) {
//         existingSubscriber.city = city;
//         existingSubscriber.first_name = first_name;
//         existingSubscriber.username = username;
//         if (existingSubscriber.blocked) {
//           ctx.reply('You are currently blocked and cannot subscribe.');
//         } else {
//           await this.subscriberRepository.save(existingSubscriber);
//           ctx.reply(`Updated subscription to daily weather updates for ${city}.`);
//         }
//       } else {
//         const subscriber = this.subscriberRepository.create({ chatId, city, first_name, username, blocked: false });
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply(`Subscribed to daily weather updates for ${city}!`);
//       }
//     });

//     this.bot.command('unsubscribe', async (ctx) => {
//       const chatId = ctx.chat.id;
//       await this.subscriberRepository.delete({ chatId });
//       ctx.reply('You have been unsubscribed.');
//     });

//     // Block user command
//     this.bot.command('block', async (ctx) => {
//       const chatId = ctx.chat.id;
//       const subscriber = await this.subscriberRepository.findOne({ where: { chatId } });
//       if (subscriber) {
//         subscriber.blocked = true;
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply('You have been blocked from receiving updates.');
//       } else {
//         ctx.reply('You are not subscribed.');
//       }
//     });

//     // Unblock user command
//     this.bot.command('unblock', async (ctx) => {
//       const chatId = ctx.chat.id;
//       const subscriber = await this.subscriberRepository.findOne({ where: { chatId } });
//       if (subscriber) {
//         subscriber.blocked = false;
//         await this.subscriberRepository.save(subscriber);
//         ctx.reply('You have been unblocked and can now subscribe again.');
//       } else {
//         ctx.reply('You are not subscribed.');
//       }
//     });

//     this.bot.launch();
//   }

//   async sendMessage(chatId: number, message: string): Promise<void> {
//     try {
//       await this.bot.telegram.sendMessage(chatId, message);
//     } catch (error) {
//       console.error(`Failed to send message to ${chatId}:`, error);
//     }
//   }

//   @Cron('0 7 * * *')
//   async sendDailyUpdates() {
//     const subscribers = await this.subscriberRepository.find();

//     for (const subscriber of subscribers) {
//       if (subscriber.blocked) {
//         continue; // Skip blocked subscribers
//       }

//       const { chatId, city } = subscriber;

//       try {
//         const weatherData = await this.weatherService.getWeather(city);
//         const message = `Good morning! The weather in *${city}* today is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*.`;
//         await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
//       } catch (error) {
//         console.error(`Failed to send weather update to ${chatId}:`, error);
//       }
//     }
//   }
// }


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
    const botToken = '8039005794:AAEMFe8tJxg826tU4RIXGswziwOwoLs3MbE' // Fetch the token from environment variables
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
      ctx.reply('Welcome! Use /subscribe <city> to receive daily weather updates.');
    });

    this.bot.command('subscribe', async (ctx) => {
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

      console.log('First Name:', first_name);
      console.log('Username:', username);
      console.log('Bot Username:', botUsername);
      console.log('Bot ID:', botId);

      const existingSubscriber = await this.subscriberModel.findOne({ chatId }).exec();

      if (existingSubscriber) {
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
        const subscriber = new this.subscriberModel({ chatId, city, first_name, username, blocked: false, botId });
        await subscriber.save();
        
        // Fetch current weather data
        const weatherData = await this.weatherService.getWeather(city);
        const message = `Subscribed to daily weather updates for ${city}! The current weather in *${city}* is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*. You will receive daily weather updates every morning at 7:00 AM.`;
        
        ctx.reply(message, { parse_mode: 'Markdown' });
            }
          });

    this.bot.command('unsubscribe', async (ctx) => {
      const chatId = ctx.chat.id;
      await this.subscriberModel.deleteOne({ chatId }).exec();
      ctx.reply('You have been unsubscribed.');
    });

    // Block user command
    this.bot.command('block', async (ctx) => {
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
      await this.bot.telegram.sendMessage(chatId, message);
    } catch (error) {
      console.error(`Failed to send message to ${chatId}:`, error);
    }
  }

  @Cron('0 7 * * *')
  async sendDailyUpdates() {
    const subscribers = await this.subscriberModel.find().exec();

    for (const subscriber of subscribers) {
      if (subscriber.blocked) {
        continue; // Skip blocked subscribers
      }

      const { chatId, city } = subscriber;

      try {
        const weatherData = await this.weatherService.getWeather(city);
        const message = `Good morning! The weather in *${city}* today is _${weatherData.current.condition.text}_ with a temperature of *${weatherData.current.temp_c}°C*.`;
        await this.bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
      } catch (error) {
        console.error(`Failed to send weather update to ${chatId}:`, error);
      }
    }
  }
}

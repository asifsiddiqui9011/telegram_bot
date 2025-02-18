
// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber } from '../telegram/subscriber.schema';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Subscriber.name) private readonly subscriberModel: Model<Subscriber>,
    private readonly telegramService: TelegramService,
  ) {}

  async getSubscribers(): Promise<Subscriber[]> {
    return this.subscriberModel.find().exec();
  }

  // async blockUser(id:string): Promise<void> {
  //   const subscriber = await this.subscriberModel.findById(id).exec();
  //   if (subscriber) {
  //     subscriber.blocked = true;
  //     await subscriber.save();
  //     await this.telegramService.sendMessage(subscriber.chatId, 'You have been blocked from receiving updates.');
  //   }
  // }

  async blockUser(id: string): Promise<void> {
    if (!id) {
      throw new Error('Invalid or missing ObjectId');
    }
  
    const subscriber = await this.subscriberModel.findById(id);
    if (subscriber) {
      subscriber.blocked = true;
      await subscriber.save();
      await this.telegramService.sendMessage(subscriber.chatId, 'You have been blocked from receiving updates.');
    } else {
      throw new Error('Subscriber not found');
    }
  }

  async unblockUser(id: string): Promise<void> {
    const subscriber = await this.subscriberModel.findById(id).exec();
    if (subscriber) {
      subscriber.blocked = false;
      await subscriber.save();
      await this.telegramService.sendMessage(subscriber.chatId, 'You have been unblocked and can now subscribe again.');
    }
  }

  async deleteUser(id: string): Promise<void> {
    const subscriber = await this.subscriberModel.findById(id).exec();
    if (subscriber) {
      await this.telegramService.sendMessage(subscriber.chatId, 'You have been unsubscribed from receiving updates.');
      await this.subscriberModel.deleteOne({ _id: id }).exec();
    }
  }
}

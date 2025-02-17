
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subscriber } from '../telegram/subscriber.entity';
// import { TelegramService } from '../telegram/telegram.service'; // Import TelegramService

// @Injectable()
// export class AdminService {
//   constructor(
//     @InjectRepository(Subscriber)
//     private readonly subscriberRepository: Repository<Subscriber>,
//     private readonly telegramService: TelegramService, // Inject TelegramService
//   ) {}

//   async getSubscribers(): Promise<Subscriber[]> {
//     return this.subscriberRepository.find();
//   }

//   async blockUser(id: number): Promise<void> {
//     const subscriber = await this.subscriberRepository.findOne({ where: { id } });
//     if (subscriber) {
//       subscriber.blocked = true;
//       await this.subscriberRepository.save(subscriber);
//       await this.telegramService.sendMessage(subscriber.chatId, 'You have been blocked from receiving updates.');
//     }
//   }

//   async unblockUser(id: number): Promise<void> {
//     const subscriber = await this.subscriberRepository.findOne({ where: { id } });
//     if (subscriber) {
//       subscriber.blocked = false;
//       await this.subscriberRepository.save(subscriber);
//       await this.telegramService.sendMessage(subscriber.chatId, 'You have been unblocked and can now subscribe again.');
//     }
//   }

//   async deleteUser(id: number): Promise<void> {
//     const subscriber = await this.subscriberRepository.findOne({ where: { id } });
//     if (subscriber) {
//       await this.telegramService.sendMessage(subscriber.chatId, 'You have been unsubscribed from receiving updates.');
//       await this.subscriberRepository.delete(id);
//     }
//   }
// }


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

  async blockUser(id: string): Promise<void> {
    const subscriber = await this.subscriberModel.findById(id).exec();
    if (subscriber) {
      subscriber.blocked = true;
      await subscriber.save();
      await this.telegramService.sendMessage(subscriber.chatId, 'You have been blocked from receiving updates.');
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

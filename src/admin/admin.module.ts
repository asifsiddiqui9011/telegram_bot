

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Subscriber } from '../telegram/subscriber.schema';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    TelegramModule, // Importing the TelegramModule
  ],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}

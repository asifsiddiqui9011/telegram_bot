// import { Module } from '@nestjs/common';
// import { TelegramService } from './telegram.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Subscriber } from './subscriber.entity';
// import { WeatherModule } from '../weather/weather.module';

// @Module({
//   imports: [
//     TypeOrmModule.forFeature([Subscriber]),
//     WeatherModule,
//   ],
//   providers: [TelegramService],
// })
// export class TelegramModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelegramService } from './telegram.service';
import { Subscriber } from './subscriber.schema';
import { WeatherModule } from '../weather/weather.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    WeatherModule,
  ],
  providers: [TelegramService],
  exports: [TelegramService, TypeOrmModule], // Exporting TypeOrmModule to use in AdminModule
})
export class TelegramModule {}

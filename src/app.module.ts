// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { WeatherModule } from './weather/weather.module';
// import { TelegramModule } from './telegram/telegram.module';
// import { ScheduleModule } from '@nestjs/schedule';
// import { AdminModule } from './admin/admin.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'sqlite',
//       database: 'db.sqlite',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     ScheduleModule.forRoot(),
//     WeatherModule,
//     TelegramModule,
//     AdminModule,
//   ],
// })
// export class AppModule {}


// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { WeatherModule } from './weather/weather.module';
// import { TelegramModule } from './telegram/telegram.module';
// import { ScheduleModule } from '@nestjs/schedule';
// import { AppController } from './app.controller';
// import { AdminModule } from './admin/admin.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'sqlite',
//       database: 'db.sqlite',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     ScheduleModule.forRoot(),
//     WeatherModule,
//     TelegramModule,
//     AdminModule,
//   ],
//   controllers: [AppController],
// })
// export class AppModule {}



// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminAuthService } from './admin/admin-auth.service';
import { AdminAuthController } from './admin/admin-auth.controller';
import { AdminUser, AdminUserSchema } from './admin/admin-user.schema';
import { Subscriber, SubscriberSchema } from './telegram/subscriber.schema';
import { TelegramService } from './telegram/telegram.service';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://asifsiddiqui9011:Sd8dHGJFHw8bkqAq@cluster0.vvlp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Replace with your MongoDB connection string'
    MongooseModule.forFeature([{ name: AdminUser.name, schema: AdminUserSchema }]),
    MongooseModule.forFeature([{ name: Subscriber.name, schema: SubscriberSchema }]),
    WeatherModule,
  ],
  controllers: [AdminAuthController, AdminController],
  providers: [AdminAuthService, AdminService, TelegramService],
})
export class AppModule {}

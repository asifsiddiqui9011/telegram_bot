
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
    MongooseModule.forRoot(`${process.env.MONGODB_URL}`), // Replace with your MongoDB connection string'
    MongooseModule.forFeature([{ name: AdminUser.name, schema: AdminUserSchema }]),
    MongooseModule.forFeature([{ name: Subscriber.name, schema: SubscriberSchema }]),
    WeatherModule,
  ],
  controllers: [AdminAuthController, AdminController],
  providers: [AdminAuthService, AdminService, TelegramService],
})
export class AppModule {}

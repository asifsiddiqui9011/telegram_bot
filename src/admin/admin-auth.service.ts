// src/admin/admin-auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminUser } from './admin-user.schema';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AdminAuthService {
  constructor(
    @InjectModel(AdminUser.name) private readonly adminUserModel: Model<AdminUser>,
  ) {}

  async register(token: string): Promise<{ token: string, success: boolean, username: string }> {
    const decodedToken = jwt.decode(token) as { email: string, username: string };
    console.log(decodedToken);
    const { email, username } = decodedToken;

    let user = await this.adminUserModel.findOne({ email }).exec();
    if (user) {
      // User exists, perform login
      const token = jwt.sign({ id: user._id, username: user.username }, 'ast-secret');
      return { token, success: true, username: user.username };
    } else {
      // User does not exist, perform signup
      const newUser = new this.adminUserModel({ email, username });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id, username: newUser.username }, 'ast-secret');
      return { token, success: true, username: newUser.username };
    }
  }

  async updateToken(userId: string, telegramToken: string): Promise<void> {
    const botId = telegramToken.split(':')[0];

    await this.adminUserModel.findOneAndUpdate({ _id: userId }, { telegramToken, botId }).exec();
  }
}

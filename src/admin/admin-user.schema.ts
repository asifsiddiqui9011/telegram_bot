// src/admin/admin-user.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AdminUser extends Document {
  @Prop({ unique: true })
  email: string;
  
  @Prop()
  username: string;

  @Prop({ nullable: true })
  botId: string;

  @Prop({ nullable: true })
  telegramToken: string;
}

export const AdminUserSchema = SchemaFactory.createForClass(AdminUser);

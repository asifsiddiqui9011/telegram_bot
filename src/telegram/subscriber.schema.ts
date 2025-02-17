// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class Subscriber {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   chatId: number;

//   @Column()
//   city: string;

//   @Column({ nullable: true })
//   first_name: string; // telegram username

//   @Column({ nullable: true })
//   username: string;

//   @Column({ default: false }) // Add blocked column
//   blocked: boolean;
// }


// src/telegram/subscriber.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subscriber extends Document {
  @Prop()
  chatId: number;

  @Prop()
  city: string;

  @Prop({ nullable: true })
  first_name: string;

  @Prop({ nullable: true })
  username: string;

  @Prop({ default: false })
  blocked: boolean;

  @Prop()
  botId: number;

}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);

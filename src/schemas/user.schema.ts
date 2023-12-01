import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  'user': string;

  @Prop({
    required: true,
    trim: true,
  })
  'birthday': string;

  @Prop({
    required: true,
    trim: true,
  })
  'gender': string;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @IsString()
  @IsNotEmpty()
  @Prop({ index: true })
  user: string;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  gender: string;
}

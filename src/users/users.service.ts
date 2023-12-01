import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  findAll() {
    return this.UserModel.find();
  }

  async findOne(id: string) {
    return this.UserModel.findById(new mongoose.Types.ObjectId(id));
  }

  async create(user: CreateUserDto) {
    const newUser = new this.UserModel(user);
    return await newUser.save();
  }

  async delete(id: string) {
    console.log('id', id);
    return this.UserModel.findByIdAndDelete(new mongoose.Types.ObjectId(id));
  }

  async update(id: string, user: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      user,
      { new: true },
    );
  }
}

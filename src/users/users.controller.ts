import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersSevice: UsersService) {}

  @Get()
  findAll() {
    return this.usersSevice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersSevice.findOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersSevice.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersSevice.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersSevice.update(id, body);
  }
}

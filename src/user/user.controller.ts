import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userServiceUser: UserService) {}

  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createUserDto: CreateUserDto,
  ) {
    return this.userServiceUser.create(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.userServiceUser.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userServiceUser.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateUserDto: UpdateUserDto,
  ) {
    return this.userServiceUser.update(id,updateUserDto);
  }
@Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userServiceUser.deleteUser(id);
  }

}

import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userServiceUser: UserService) {}

  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true,forbidNonWhitelisted:true })) createUserDto: CreateUserDto,
  ) {
    return this.userServiceUser.create(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.userServiceUser.findAll();
  }
}

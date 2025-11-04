import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}
  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const newUser = this.user.create(CreateUserDto);
    return await this.user.save(newUser);
  }

  async findAll() {
    return await this.user.find();
  }
}

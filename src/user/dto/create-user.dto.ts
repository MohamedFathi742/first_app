import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'First name must be a string' })
  firstName: string;
  @IsString({ message: 'Last name must be a string' })
  lastName: string;
  @IsNumber({}, { message: 'Age must be a number' })
  age: number;
}

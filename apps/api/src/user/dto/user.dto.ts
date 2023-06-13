import { PartialType } from '@nestjs/mapped-types';

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: number;

  @IsEmail()
  email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

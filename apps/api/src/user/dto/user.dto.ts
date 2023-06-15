import { PartialType } from '@nestjs/mapped-types';

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '@event-app/shared';

export class CreateUserDto implements Readonly<CreateUserDto> {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  lastName: number;

  @ApiProperty({ required: true })
  @IsEmail()
  email: string;

  public static from(dto: Partial<User>) {
    const user = new User();
    user.id = dto.id;
    user.firstName = dto.firstName;
    user.lastName = dto.lastName;
    user.email = dto.email;
    return user;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email
    });
  }
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

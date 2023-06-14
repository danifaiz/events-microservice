import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user.dto';
import { UserRepository } from '@event-app/shared/database/repositories/user.repository';
import { In } from 'typeorm';
import { User } from '@event-app/shared/database/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id: In([id])}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = new User();
    updatedUser.id = id;
    return this.repository.findOneAndUpdate(CreateUserDto.from({...updateUserDto, ...updatedUser}));
  }

  async remove(id: number) {
    const deletedUser = new User();
    deletedUser.id = id;
    try {
      await this.repository.delete(deletedUser);
      return { message: 'Record deleted successfully'};
    } catch(error) {
      throw error;
    }
  }
}

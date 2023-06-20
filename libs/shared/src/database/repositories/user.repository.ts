import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindOneOptions, In, Repository } from 'typeorm';
import { EntityRepository } from '../db.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends EntityRepository<User> {
  constructor(
    @InjectRepository(User)
    protected readonly repo: Repository<User>,
    @InjectDataSource() dataSource: DataSource
  ) {
    super(dataSource);
  }

  protected readonly logger: Logger = new Logger('UserRepository');

  public updateUser = async (id: number, user: User) => {
    const options: FindOneOptions = {
      where: {
        id: In([id]),
      },
    };
    const existedUser = await this.repo.findOne(options);
    if (!existedUser) {
      return Promise.reject('Record you are updating does not exist');
    }
    const org = await this.repo.update(
      { id },
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isActive: user.isActive
      },
    );
    console.log('org', org)
    return org;
  };
}

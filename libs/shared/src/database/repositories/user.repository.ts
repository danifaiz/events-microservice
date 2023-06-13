import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
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
}

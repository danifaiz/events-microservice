import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { EntityRepository } from '../db.repository';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventRepository extends EntityRepository<Event> {
  constructor(
    @InjectRepository(Event)
    protected readonly repo: Repository<Event>,
    @InjectDataSource() dataSource: DataSource
  ) {
    super(dataSource);
  }

  protected readonly logger: Logger = new Logger(EventRepository.name);
}

import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { EntityRepository } from '../db.repository';
import { Organizer } from '../entities/organizer.entity';

@Injectable()
export class OrganizerRepository extends EntityRepository<Organizer> {
  constructor(
    @InjectRepository(Organizer)
    protected readonly repo: Repository<Organizer>,
    @InjectDataSource() dataSource: DataSource
  ) {
    super(dataSource);
  }

  protected readonly logger: Logger = new Logger(OrganizerRepository.name);
}
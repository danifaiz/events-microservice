import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import {
  DataSource,
  FindOneOptions,
  In,
  Repository,
  UpdateResult,
} from 'typeorm';
import { EntityRepository } from '../db.repository';
import { Organizer } from '../entities/organizer.entity';

@Injectable()
export class OrganizerRepository extends EntityRepository<Organizer> {
  constructor(
    @InjectRepository(Organizer)
    protected readonly repo: Repository<Organizer>,
    @InjectDataSource() dataSource: DataSource,
  ) {
    super(dataSource);
  }

  protected readonly logger: Logger = new Logger(OrganizerRepository.name);

  public updateOrganizer = async (
    id: number,
    organizer: Organizer,
  ): Promise<{ affectedRows: number }> => {
    const options: FindOneOptions = {
      where: {
        id: In([id]),
      },
    };
    const existedOrganizer = await this.repo.findOne(options);
    if (!existedOrganizer) {
      return Promise.reject('Record you are updating does not exist');
    }
    const org = await this.repo.update(
      { id },
      {
        name: organizer.name,
        email: organizer.email,
        contact: organizer.contact,
      },
    );
    return { affectedRows: org.affected };
  };
}

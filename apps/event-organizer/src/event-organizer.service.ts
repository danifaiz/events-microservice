import {
  CreateEventOrganizerDto,
  Organizer,
  OrganizerRepository,
} from '@event-app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { FindOneOptions, In } from 'typeorm';

@Injectable()
export class EventOrganizerService {
  private readonly logger = new Logger(EventOrganizerService.name);

  constructor(private readonly repository: OrganizerRepository) {}

  async createEventOrganizer(createDto: CreateEventOrganizerDto) {
    const response = await this.repository.create(createDto);
    return response;
  }

  async getEventOrganizers() {
    return this.repository.findAll();
  }

  async findEventOrganizer(id: number) {
    const options: FindOneOptions = {
      where: {
        id: In([id]),
      },
    };
    const organizer: Organizer = await this.repository.findOne(options);
    return { data: organizer };
  }

  async updateEventOrganizer(organizer: Organizer) {
    return this.repository.updateOrganizer(organizer.id, organizer);
  }

  async deleteEventOrganizer(
    organizer: Organizer,
  ): Promise<{ deleted: boolean }> {
    await this.repository.delete(organizer);
    return { deleted: true };
  }
}

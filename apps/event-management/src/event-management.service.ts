import { EventRepository } from '@event-app/shared';
import { CreateEventDto } from '@event-app/shared/dto/event.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EventManagementService {
  private readonly logger = new Logger(EventManagementService.name);

  constructor(private readonly repository: EventRepository) {}

  async createEvent(createDto: CreateEventDto) {
    const response = await this.repository.create(createDto);
    console.log('response', response)
    return response;
  }
}

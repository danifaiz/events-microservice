import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EventOrganizerService {
  private readonly logger = new Logger(EventOrganizerService.name)

  async createEventOrganizer(createDto: any) {
    this.logger.log('Handle Creation Of Event Org', createDto);
  }
}

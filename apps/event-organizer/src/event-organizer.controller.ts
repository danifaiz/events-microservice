import { Controller, Get } from '@nestjs/common';
import { EventOrganizerService } from './event-organizer.service';

@Controller()
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @Get()
  getHello(): string {
    return this.eventOrganizerService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { EventManagementService } from './event-management.service';

@Controller()
export class EventManagementController {
  constructor(private readonly eventManagementService: EventManagementService) {}

  @Get()
  getHello(): string {
    return this.eventManagementService.getHello();
  }
}

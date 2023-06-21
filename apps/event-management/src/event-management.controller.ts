import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { EventManagementService } from './event-management.service';

@Controller()
export class EventManagementController {
  constructor(private readonly eventManagementService: EventManagementService) {}

  @MessagePattern('event.create', Transport.KAFKA)
  async handleEventOrganizerCreation(@Payload() data: any, @Ctx() context: KafkaContext) {
    return this.eventManagementService.createEvent(data);
  }
}

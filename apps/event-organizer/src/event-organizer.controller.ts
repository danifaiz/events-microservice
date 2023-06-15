import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { EventOrganizerService } from './event-organizer.service';

@Controller()
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @MessagePattern('organizer_created', Transport.KAFKA)
  async handleEventOrganizerCreation(@Payload() data: any, @Ctx() context: KafkaContext) {
    await this.eventOrganizerService.createEventOrganizer(data);
  }
}

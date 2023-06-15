import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, Payload, Transport } from '@nestjs/microservices';
import { EventOrganizerService } from './event-organizer.service';

@Controller()
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @EventPattern('organizer_created', Transport.KAFKA)
  async handleEventOrganizerCreationTest(@Payload() data: any, @Ctx() context: KafkaContext) {
    await this.eventOrganizerService.createEventOrganizer(data);
  }
}

import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { EventOrganizerService } from './event-organizer.service';

@Controller()
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @MessagePattern('organizer.create', Transport.KAFKA)
  async handleEventOrganizerCreation(@Payload() data: any, @Ctx() context: KafkaContext) {
    return this.eventOrganizerService.createEventOrganizer(data);
  }

  @MessagePattern('organizer.all', Transport.KAFKA)
  async handleGetEventOrganizers(@Payload() data: any, @Ctx() context: KafkaContext) {
    return this.eventOrganizerService.getEventOrganizers();
  }

  @MessagePattern('organizer.find', Transport.KAFKA)
  async handleFindEventOrganizer(@Payload() data: any, @Ctx() context: KafkaContext) {
    return this.eventOrganizerService.findEventOrganizer(data.id);
  }

  @MessagePattern('organizer.update', Transport.KAFKA)
  async handleUpdateEventOrganizer(@Payload() data: any, @Ctx() context: KafkaContext) {
    return this.eventOrganizerService.updateEventOrganizer(data);
  }

  @MessagePattern('organizer.delete', Transport.KAFKA)
  async handleDeleteEventOrganizer(@Payload() data: any, @Ctx() context: KafkaContext) {
    try {
      const organizer = await this.eventOrganizerService.findEventOrganizer(data.id);
      return this.eventOrganizerService.deleteEventOrganizer(organizer.data);
    } catch(error) {
      return { data: error.message, deleted: false }
    }
  }
}

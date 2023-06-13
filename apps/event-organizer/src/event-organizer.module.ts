import { Module } from '@nestjs/common';
import { EventOrganizerController } from './event-organizer.controller';
import { EventOrganizerService } from './event-organizer.service';

@Module({
  imports: [],
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService],
})
export class EventOrganizerModule {}

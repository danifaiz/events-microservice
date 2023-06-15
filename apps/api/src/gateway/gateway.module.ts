import { Module } from '@nestjs/common';
import { EventOrganizerService } from './gateway.service';
import { EventOrganizerController } from './gateway.controller';
import { DatabaseModule } from '@event-app/shared';
import { KafkaModule } from '@event-app/shared';
import { EVENT_ORGANIZER_SERVICE } from 'apps/api/constants';

@Module({
  imports: [
    DatabaseModule,
    KafkaModule.register({
      name: EVENT_ORGANIZER_SERVICE,
    }),
  ],
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService],
  exports: []
})
export class EventOrganizerModule {}

import { Module } from '@nestjs/common';
import { EventOrganizerService } from './event-organizer.service';
import { EventOrganizerController } from './event-organizer.controller';
import { DatabaseModule } from '@event-app/shared/database/db.module';
import { KafkaModule } from '@event-app/shared/kafka/kafka.module';
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

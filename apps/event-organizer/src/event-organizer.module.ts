import { DatabaseModule, KafkaModule, KafkaService, OrganizerRepository } from '@event-app/shared';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventOrganizerController } from './event-organizer.controller';
import { EventOrganizerService } from './event-organizer.service';
import { EVENT_ENV } from '@event-app/shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: EVENT_ENV,
      envFilePath: './apps/event-management/.env',
    }),
    KafkaModule,
    DatabaseModule
  ],
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService, KafkaService, OrganizerRepository],
})
export class EventOrganizerModule {}

import { KafkaModule } from '@event-app/shared';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventOrganizerController } from './event-organizer.controller';
import { EventOrganizerService } from './event-organizer.service';
import { EVENT_ORG_ENV } from '@event-app/shared';
import { KafkaService } from '@event-app/shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: EVENT_ORG_ENV,
      envFilePath: './apps/event-organizer/.env',
    }),
    KafkaModule,
  ],
  controllers: [EventOrganizerController],
  providers: [EventOrganizerService, KafkaService],
})
export class EventOrganizerModule {}

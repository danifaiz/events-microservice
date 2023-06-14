import { KafkaModule } from '@event-app/shared/kafka/kafka.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventOrganizerController } from './event-organizer.controller';
import { EventOrganizerService } from './event-organizer.service';
import { EVENT_ORG_ENV } from '@event-app/shared/config';

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
  providers: [EventOrganizerService],
})
export class EventOrganizerModule {}

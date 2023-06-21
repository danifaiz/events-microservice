import { DatabaseModule, EventRepository, EVENT_ENV, KafkaModule, KafkaService } from '@event-app/shared';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventManagementController } from './event-management.controller';
import { EventManagementService } from './event-management.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: EVENT_ENV,
      envFilePath: './apps/event-organizer/.env',
    }),
    KafkaModule,
    DatabaseModule
  ],
  controllers: [EventManagementController],
  providers: [EventManagementService, KafkaService, EventRepository],
})
export class EventManagementModule {}

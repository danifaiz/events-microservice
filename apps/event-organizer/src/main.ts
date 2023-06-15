import { KafkaService } from '@event-app/shared';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { EventOrganizerModule } from './event-organizer.module';

async function bootstrap() {
  const app = await NestFactory.create(EventOrganizerModule);
  const kafkaService = app.get<KafkaService>(KafkaService);
  const configService = app.get<ConfigService>(ConfigService);
  app.connectMicroservice(
    kafkaService.getOptions(
      configService.get('KAFKA_CLIENT_ID'),
      configService.get('KAFKA_GROUP_ID'),
    ),
  );
  await app.startAllMicroservices();
}
bootstrap();
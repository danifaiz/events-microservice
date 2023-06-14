import { KafkaService } from '@event-app/shared/kafka/kafka.service';
import { NestFactory } from '@nestjs/core';
import { EventOrganizerModule } from './event-organizer.module';

async function bootstrap() {
  const app = await NestFactory.create(EventOrganizerModule);
  const kafkaService = app.get<KafkaService>(KafkaService);
  app.connectMicroservice(kafkaService.getOptions());
  await app.startAllMicroservices();
}
bootstrap();

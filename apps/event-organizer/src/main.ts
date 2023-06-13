import { NestFactory } from '@nestjs/core';
import { EventOrganizerModule } from './event-organizer.module';

async function bootstrap() {
  const app = await NestFactory.create(EventOrganizerModule);
  await app.listen(3000);
}
bootstrap();

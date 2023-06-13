import { NestFactory } from '@nestjs/core';
import { EventManagementModule } from './event-management.module';

async function bootstrap() {
  const app = await NestFactory.create(EventManagementModule);
  await app.listen(3000);
}
bootstrap();

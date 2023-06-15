import { DatabaseModule } from '@event-app/shared/database/db.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { API_ENV } from '@event-app/shared/config';
import { EventOrganizerModule } from './event-organizer/event-organizer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: API_ENV,
      envFilePath: './apps/api/.env',
    }),
    UserModule,
    DatabaseModule,
    EventOrganizerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

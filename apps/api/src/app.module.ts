import { DatabaseModule } from '@event-app/shared';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { API_ENV } from '@event-app/shared';
import { EventOrganizerModule } from './gateway/gateway.module';

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

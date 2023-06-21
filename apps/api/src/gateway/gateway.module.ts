import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { DatabaseModule } from '@event-app/shared';
import { KafkaModule } from '@event-app/shared';
import { EVENT_MANAGEMENT_SERVICE, EVENT_ORGANIZER_SERVICE } from 'apps/api/constants';

@Module({
  imports: [
    DatabaseModule,
    KafkaModule.register({
      name: EVENT_ORGANIZER_SERVICE,
    }),
    KafkaModule.register({
      name: EVENT_MANAGEMENT_SERVICE,
    })
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
  exports: []
})
export class GatewayModule {}

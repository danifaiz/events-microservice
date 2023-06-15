import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, KafkaOptions, Transport } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';

interface KafkaModuleOptions {
  name: string;
}

@Module({
  providers: [KafkaService],
  exports: [KafkaService],
})
export class KafkaModule {
  static register({ name }: KafkaModuleOptions): DynamicModule {
    return {
      module: KafkaModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configService: ConfigService): KafkaOptions => ({
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId: configService.get('KAFKA_CLIENT_ID'),
                  brokers: [configService.get('KAFKA_URI')],
                },
                producerOnlyMode: true,
                consumer: {
                  groupId: configService.get('KAFKA_GROUP_ID'),
                },
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}

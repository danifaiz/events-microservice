import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KafkaOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(): KafkaOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: this.configService.get('KAFKA_CLIENT_ID'),
          brokers: [this.configService.get('KAFKA_URI')],
        },
        consumer: {
          groupId: this.configService.get('KAFKA_GROUP_ID'),
          sessionTimeout: 30000,
          retry: {
            retries: 5,
          },
        },
      },
    };
  }
}

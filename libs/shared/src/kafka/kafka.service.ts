import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KafkaOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(clientId: string, groupId: string): KafkaOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId,
          brokers: [this.configService.get('KAFKA_URI')],
        },
        consumer: {
          groupId: groupId
        },
      },
    };
  }
}

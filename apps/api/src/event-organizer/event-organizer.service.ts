import { Inject, Injectable, Logger } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { EVENT_ORGANIZER_SERVICE } from 'apps/api/constants';
import { CreateEventOrganizerDto } from './dto/event-organizer.dto';
import { UpdateEventOrganizerDto } from './dto/event-organizer.dto';

@Injectable()
export class EventOrganizerService {
  private readonly logger = new Logger('EventOrganizer.Service');
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'event-management-processor',
        brokers: ['localhost:9092'],
      },
    }
  })
  client: ClientKafka;

  constructor(
    @Inject(EVENT_ORGANIZER_SERVICE) private kafkaClient: ClientKafka
  ) {
  }

  async create(createEventOrganizerDto: CreateEventOrganizerDto) {
    try {
      await this.client.connect();
      const result = await this.client.send('organizer_created', createEventOrganizerDto);
      this.logger.warn(JSON.stringify(result))
    } catch(error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all eventOrganizer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventOrganizer`;
  }

  update(id: number, updateEventOrganizerDto: UpdateEventOrganizerDto) {
    return `This action updates a #${id} eventOrganizer`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventOrganizer`;
  }
}

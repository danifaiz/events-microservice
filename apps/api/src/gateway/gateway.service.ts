import { CreateEventOrganizerDto, UpdateEventOrganizerDto } from '@event-app/shared';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { EVENT_ORGANIZER_SERVICE } from 'apps/api/constants';

@Injectable()
export class EventOrganizerService {
  private readonly logger = new Logger('EventOrganizer.Service');

  constructor(
    @Inject(EVENT_ORGANIZER_SERVICE) private kafkaClient: ClientKafka
  ) {
  }

  onModuleInit() {
    this.logger.log(`API Gateway Module has initialized `);
    this.kafkaClient.subscribeToResponseOf('organizer_created');
  }

  async create(createEventOrganizerDto: CreateEventOrganizerDto) {
    try {
      this.kafkaClient.emit('organizer_created', createEventOrganizerDto);
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

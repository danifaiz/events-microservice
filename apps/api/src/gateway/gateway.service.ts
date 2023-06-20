import {
  CreateEventOrganizerDto,
  UpdateEventOrganizerDto,
} from '@event-app/shared';
import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { EVENT_ORGANIZER_SERVICE } from 'apps/api/constants';
import { catchError, lastValueFrom, tap } from 'rxjs';

@Injectable()
export class EventOrganizerService {
  private readonly logger = new Logger('EventOrganizer.Service');

  constructor(
    @Inject(EVENT_ORGANIZER_SERVICE) private kafkaClient: ClientKafka,
  ) {}

  onModuleInit() {
    this.logger.log(`API Gateway Module has initialized `);
    const requestPatterns = [
      'organizer.create',
      'organizer.all',
      'organizer.find',
      'organizer.update',
      'organizer.delete'
    ];

    requestPatterns.forEach(pattern => {
      this.kafkaClient.subscribeToResponseOf(pattern);
    });

  }

  async createEventOrganizer(createEventOrganizerDto: CreateEventOrganizerDto) {
    try {
      const result = await lastValueFrom(
        this.kafkaClient.send('organizer.create', createEventOrganizerDto),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAllEventOrganizer() {
    try {
      const result = await lastValueFrom(
        this.kafkaClient.send('organizer.all', {key: 1}),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOneEventOrganizer(id: number) {
    try {
      const result = await lastValueFrom(
        this.kafkaClient.send('organizer.find', {id }),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateEventOrganizer(id: number, updateEventOrganizerDto: UpdateEventOrganizerDto) {
    try {
      const result = await lastValueFrom(
        this.kafkaClient.send('organizer.update', { id, ...updateEventOrganizerDto }),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async removeEventOrganizer(id: number) {
    try {
      const result = await lastValueFrom(
        this.kafkaClient.send('organizer.delete', { id }),
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

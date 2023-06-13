import { Injectable } from '@nestjs/common';

@Injectable()
export class EventOrganizerService {
  getHello(): string {
    return 'Hello World!';
  }
}

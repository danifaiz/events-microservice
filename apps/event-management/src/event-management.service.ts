import { Injectable } from '@nestjs/common';

@Injectable()
export class EventManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}

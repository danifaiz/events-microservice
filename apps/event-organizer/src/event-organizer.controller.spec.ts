import { Test, TestingModule } from '@nestjs/testing';
import { EventOrganizerController } from './event-organizer.controller';
import { EventOrganizerService } from './event-organizer.service';

describe('EventOrganizerController', () => {
  let eventOrganizerController: EventOrganizerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventOrganizerController],
      providers: [EventOrganizerService],
    }).compile();

    eventOrganizerController = app.get<EventOrganizerController>(EventOrganizerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventOrganizerController.getHello()).toBe('Hello World!');
    });
  });
});

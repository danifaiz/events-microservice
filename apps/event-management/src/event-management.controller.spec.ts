import { Test, TestingModule } from '@nestjs/testing';
import { EventManagementController } from './event-management.controller';
import { EventManagementService } from './event-management.service';

describe('EventManagementController', () => {
  let eventManagementController: EventManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventManagementController],
      providers: [EventManagementService],
    }).compile();

    eventManagementController = app.get<EventManagementController>(EventManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventManagementController.getHello()).toBe('Hello World!');
    });
  });
});

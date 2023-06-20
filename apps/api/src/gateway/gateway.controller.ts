import { CreateEventOrganizerDto, UpdateEventOrganizerDto } from '@event-app/shared';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventOrganizerService } from './gateway.service';

@Controller('api')
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @Post('event-organizer/create')
  createEventOrganizer(@Body() createEventOrganizerDto: CreateEventOrganizerDto) {
    return this.eventOrganizerService.createEventOrganizer(createEventOrganizerDto);
  }

  @Get('event-organizer/list')
  findAllEventOrganizer() {
    return this.eventOrganizerService.findAllEventOrganizer();
  }

  @Get('event-organizer/:id')
  findOneEventOrganizer(@Param('id') id: string) {
    return this.eventOrganizerService.findOneEventOrganizer(+id);
  }

  @Patch('event-organizer/:id')
  updateEventOrganizer(@Param('id') id: string, @Body() updateEventOrganizerDto: UpdateEventOrganizerDto) {
    return this.eventOrganizerService.updateEventOrganizer(+id, updateEventOrganizerDto);
  }

  @Delete('event-organizer/:id')
  remove(@Param('id') id: string) {
    return this.eventOrganizerService.removeEventOrganizer(+id);
  }
}

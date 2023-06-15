import { CreateEventOrganizerDto, UpdateEventOrganizerDto } from '@event-app/shared';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventOrganizerService } from './gateway.service';

@Controller('api')
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @Post('event-organizer/create')
  handleEventOrganizer(@Body() createEventOrganizerDto: CreateEventOrganizerDto) {
    return this.eventOrganizerService.create(createEventOrganizerDto);
  }

  @Get()
  findAll() {
    return this.eventOrganizerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventOrganizerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventOrganizerDto: UpdateEventOrganizerDto) {
    return this.eventOrganizerService.update(+id, updateEventOrganizerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventOrganizerService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventOrganizerService } from './event-organizer.service';
import { CreateEventOrganizerDto } from './dto/event-organizer.dto';
import { UpdateEventOrganizerDto } from './dto/event-organizer.dto';

@Controller('event-organizer')
export class EventOrganizerController {
  constructor(private readonly eventOrganizerService: EventOrganizerService) {}

  @Post()
  create(@Body() createEventOrganizerDto: CreateEventOrganizerDto) {
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

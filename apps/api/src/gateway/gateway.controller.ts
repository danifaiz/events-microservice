import { CreateEventOrganizerDto, UpdateEventOrganizerDto } from '@event-app/shared';
import { CreateEventDto } from '@event-app/shared/dto/event.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller('api')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post('event-organizer/create')
  createEventOrganizer(@Body() createEventOrganizerDto: CreateEventOrganizerDto) {
    return this.gatewayService.createEventOrganizer(createEventOrganizerDto);
  }

  @Get('event-organizer/list')
  findAllEventOrganizer() {
    return this.gatewayService.findAllEventOrganizer();
  }

  @Get('event-organizer/:id')
  findOneEventOrganizer(@Param('id') id: string) {
    return this.gatewayService.findOneEventOrganizer(+id);
  }

  @Patch('event-organizer/:id')
  updateEventOrganizer(@Param('id') id: string, @Body() updateEventOrganizerDto: UpdateEventOrganizerDto) {
    return this.gatewayService.updateEventOrganizer(+id, updateEventOrganizerDto);
  }

  @Delete('event-organizer/:id')
  removeEventOrganizer(@Param('id') id: string) {
    return this.gatewayService.removeEventOrganizer(+id);
  }

  @Post('event/create')
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.gatewayService.createEvent(createEventDto);
  }
}

import { PartialType } from '@nestjs/swagger';

export class CreateEventOrganizerDto {}

export class UpdateEventOrganizerDto extends PartialType(CreateEventOrganizerDto) {}

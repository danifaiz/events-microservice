import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Event } from './event.entity';

@Entity()
export class Organizer extends Base {
  @Column()
  name: string;

  @Column({ name: 'email', type: 'text' })
  email: string;

  @Column()
  contact: string;

  @OneToMany(() => Event, (event) => event.organizer)
  createdEvents: Event[]

}

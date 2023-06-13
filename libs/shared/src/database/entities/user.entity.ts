import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Event } from './event.entity';

@Entity()
export class User extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ name: 'email', type: 'text' })
  email: string;

  @OneToMany(() => Event, (event) => event.attendees)
  attendedEvents: Event[];

  @Column({ default: true })
  isActive: boolean;
}

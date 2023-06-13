import { Entity, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Base } from './base.entity';
import { Organizer } from './organizer.entity';
import { User } from './user.entity';

@Entity()
export class Event extends Base {
  @Column()
  title: string;

  @Column()
  startDate: Date;

  @ManyToOne(() => User, (user) => user.attendedEvents)
  attendees: User;

  @ManyToOne(() => Organizer, (organizer) => organizer.createdEvents)
  organizer: Organizer;
  
}

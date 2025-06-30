import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Project } from '../../project/entities/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 'todo' })
  status: 'todo' | 'in-progress' | 'done';

  @Column()
  projectId: number;

  @ManyToOne(() => Project, (project) => project.tasks, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @Column({ nullable: true })
  assignedUserId: number;

  @ManyToOne(() => User, (user) => user.tasks, {
    nullable: true,
    onDelete: 'SET NULL',
    eager: true,
  })
  @JoinColumn({ name: 'assignedUserId' })
  assignedUser: User;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ type: 'int', default: 1 })
  priority: number;
}

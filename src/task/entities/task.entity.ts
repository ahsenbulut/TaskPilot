import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../../project/entities/project.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ default: 'todo' })
  status!: 'todo' | 'in-progress' | 'done';

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => Project, (project) => project.id)
  project!: Project;
}

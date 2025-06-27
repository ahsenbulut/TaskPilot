import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Task } from '../../task/entities/task.entity';
import { OneToMany } from 'typeorm';




@Entity('projects')
export class Project {
  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

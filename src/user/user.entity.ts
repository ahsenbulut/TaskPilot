import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Task } from '.././task/entities/task.entity'; // ✅ dizine göre ayarla

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  GUEST = 'guest',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  name!: string;

  @Column()
  @Exclude()
  password!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role!: UserRole;

  @CreateDateColumn()
  createdAt!: Date;

  // ✅ İLİŞKİ: Bu kullanıcıya atanmış görevler
  @OneToMany(() => Task, (task) => task.assignedUser)
  tasks!: Task[];
}

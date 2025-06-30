import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './entities/task.entity';
import { User } from '../user/entities/user.entity'; // user dosyanı bu şekilde oluşturacaksın

import { AssignTaskDto } from './dto/assign-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

import { CreateTaskDto } from './dto/create-task.dto';



@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(User)
    private userRepository: Repository<User>, // bu önemli!
  ) {}

  async assignTask(id: number, { assignedUserId }: AssignTaskDto) {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) throw new NotFoundException('Task not found');

    const user = await this.userRepository.findOneBy({ id: assignedUserId });
    if (!user) throw new NotFoundException('User not found');

    task.assignedUser = user;
    return this.taskRepository.save(task);
  }

  async updateStatus(id: number, { status }: UpdateStatusDto) {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) throw new NotFoundException('Task not found');

    task.status = status;
    return this.taskRepository.save(task);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
  const task = this.taskRepository.create(createTaskDto);
  return this.taskRepository.save(task);
}

async findAllByProject(projectId: number) {
  return this.taskRepository.find({
    where: { projectId },
    relations: ['project', 'assignedUser'],
  });
}

async remove(id: number) {
  const task = await this.taskRepository.findOneBy({ id });
  if (!task) throw new NotFoundException('Task not found');
  return this.taskRepository.remove(task);
}





}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Project } from '../project/entities/project.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(dto: CreateTaskDto) {
    const task = this.taskRepository.create({
      title: dto.title,
      status: dto.status || 'todo',
      description: dto.description,
      project: { id: dto.projectId } as Project,
    });
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find({
      relations: ['project'], // opsiyonel: projeyi de getir
    });
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ['project'],
    });
    if (!task) throw new NotFoundException('Görev bulunamadı');
    return task;
  }

  async update(id: number, dto: UpdateTaskDto) {
    const task = await this.findOne(id);
    return this.taskRepository.save({ ...task, ...dto });
  }

  async remove(id: number) {
    const task = await this.findOne(id);
    return this.taskRepository.remove(task);
  }
}

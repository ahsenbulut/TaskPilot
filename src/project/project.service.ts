import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(dto: CreateProjectDto) {
    const project = this.projectRepository.create(dto);
    return this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find();
  }

  async findOne(id: number) {
    const project = await this.projectRepository.findOneBy({ id });
    if (!project) throw new NotFoundException('Proje bulunamadı');
    return project;
  }

  async update(id: number, dto: UpdateProjectDto) {
    const project = await this.findOne(id);
    return this.projectRepository.save({ ...project, ...dto });
  }

  async remove(id: number) {
    const project = await this.findOne(id);
    return this.projectRepository.remove(project);
  }
}

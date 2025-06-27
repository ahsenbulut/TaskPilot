import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AssignTaskDto } from './dto/assign-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // CREATE
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  // GET all tasks by projectId
  @Get()
  findAll(@Query('projectId') projectId: number) {
    return this.taskService.findAllByProject(projectId);
  }

  // PATCH status update
  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body() dto: UpdateStatusDto) {
    return this.taskService.updateStatus(+id, dto);
  }

  // PATCH assign user
  @Patch(':id/assign')
  assign(@Param('id') id: number, @Body() dto: AssignTaskDto) {
    return this.taskService.assignTask(+id, dto);
  }

  // DELETE task
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.remove(+id);
  }
}

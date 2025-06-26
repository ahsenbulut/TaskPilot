import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ProjectModule, TaskModule],
})
export class AppModule {}

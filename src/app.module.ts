import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { Project } from './project/entities/project.entity';
import { Task } from './task/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ahsen',
      password: 'secret',
      database: 'taskpilot_db',
      entities: [Project, Task],
      synchronize: true,
    }),
    ProjectModule,
    TaskModule,
  ],
})
export class AppModule {}

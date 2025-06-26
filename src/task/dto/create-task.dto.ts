import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  @IsIn(['todo', 'in-progress', 'done'])
  status?: 'todo' | 'in-progress' | 'done';

  @IsOptional()
  description?: string;

  @IsNotEmpty()
  projectId!: number;
}

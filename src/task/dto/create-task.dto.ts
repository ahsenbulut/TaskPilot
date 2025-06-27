import {
  IsNotEmpty,
  IsOptional,
  IsIn,
  IsDateString,
} from 'class-validator';

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

  @IsOptional()
  assignedUserId?: number;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;

  @IsOptional()
  @IsIn([1, 2, 3])
  priority?: number;

}

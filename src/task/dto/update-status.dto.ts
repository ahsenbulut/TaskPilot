import { IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsIn(['todo', 'in-progress', 'done'])
  status: 'todo' | 'in-progress' | 'done';
}

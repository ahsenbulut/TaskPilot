import { IsNumber } from 'class-validator';

export class AssignTaskDto {
  @IsNumber()
  assignedUserId: number;
}

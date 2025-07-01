import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { UserRole } from '../user.entity';

export class UpdateUserRoleDto {
  @ApiProperty({
    example: 'manager',
    description: 'Yeni kullanıcı rolü',
    enum: UserRole,
  })
  @IsEnum(UserRole)
  role: UserRole;
}

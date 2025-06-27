import { IsEnum } from 'class-validator';
import { UserRole } from '../user.entity';

export class UpdateUserRoleDto {
  @IsEnum(UserRole, {
    message: 'Role must be one of: admin, manager, guest',
  })
  role: UserRole;
}

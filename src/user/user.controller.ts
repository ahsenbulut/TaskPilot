import {
  Controller,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdateUserRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtPayloadWithUser } from '../auth/types/jwt-payload-with-user';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Bir kullanıcının rolünü değiştir (admin only)' })
  @Patch(':id/role')
  async updateRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserRoleDto,
    @Req() req: { user: JwtPayloadWithUser },
  ) {
    return this.userService.updateRole(id, body.role, req.user);
  }
}

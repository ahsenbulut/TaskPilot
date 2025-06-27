import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './user.entity';
import { JwtPayloadWithUser } from '../auth/types/jwt-payload-with-user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  create(data: Partial<User>): Promise<User> {
    const user = this.repo.create(data);
    return this.repo.save(user);
  }

  async countUsers(): Promise<number> {
    return this.repo.count();
  }

  async updateRole(
    targetUserId: number,
    newRole: UserRole,
    currentUser: JwtPayloadWithUser,
  ): Promise<User> {
    if (targetUserId === currentUser.id) {
      throw new ForbiddenException('You cannot change your own role.');
    }

    const targetUser = await this.repo.findOne({ where: { id: targetUserId } });
    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    if (targetUser.role === UserRole.ADMIN && newRole !== UserRole.ADMIN) {
      throw new ForbiddenException('You cannot change another admin’s role.');
    }

    targetUser.role = newRole;
    return this.repo.save(targetUser);
  }
}

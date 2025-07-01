import { Repository } from 'typeorm';
import { User, UserRole } from './user.entity';
import { JwtPayloadWithUser } from '../auth/types/jwt-payload-with-user';
export declare class UserService {
    private readonly repo;
    constructor(repo: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    create(data: Partial<User>): Promise<User>;
    countUsers(): Promise<number>;
    updateRole(targetUserId: number, newRole: UserRole, currentUser: JwtPayloadWithUser): Promise<User>;
}

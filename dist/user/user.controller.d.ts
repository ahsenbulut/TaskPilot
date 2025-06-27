import { UserService } from './user.service';
import { UpdateUserRoleDto } from './dto/update-role.dto';
import { JwtPayloadWithUser } from '../auth/types/jwt-payload-with-user';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    updateRole(id: number, body: UpdateUserRoleDto, req: {
        user: JwtPayloadWithUser;
    }): Promise<import("./user.entity").User>;
}

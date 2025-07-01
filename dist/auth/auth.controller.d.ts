import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayloadWithUser } from './types/jwt-payload-with-user';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<Record<string, any>>;
    login(body: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            role: string;
        };
    }>;
    getProfile(req: {
        user: JwtPayloadWithUser;
    }): JwtPayloadWithUser;
    adminTest(): string;
}

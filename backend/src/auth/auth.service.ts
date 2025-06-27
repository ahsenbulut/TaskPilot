import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { instanceToPlain } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterDto): Promise<Record<string, any>> {
    const existing = await this.userService.findByEmail(data.email);
    if (existing) {
      throw new ConflictException('Email already in use');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const hashed: string = await bcrypt.hash(data.password, 10);
    const userCount = await this.userService.countUsers();

    const newUser = await this.userService.create({
      email: data.email,
      name: data.name,
      password: hashed,
      role: userCount === 0 ? UserRole.ADMIN : UserRole.MEMBER,
    });

    return instanceToPlain(newUser);
  }

  async login(data: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userService.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const isMatch: boolean = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}

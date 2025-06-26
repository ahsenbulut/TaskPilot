import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto): Promise<Record<string, any>> {
    return this.authService.register(body);
  }
  @Post('login')
  login(@Body() body: LoginDto): Promise<{ access_token: string }> {
    return this.authService.login(body);
  }
}

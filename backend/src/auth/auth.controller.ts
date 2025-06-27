import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtPayloadWithUser } from './types/jwt-payload-with-user';

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
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: { user: JwtPayloadWithUser }): JwtPayloadWithUser {
    return req.user;
  }
}

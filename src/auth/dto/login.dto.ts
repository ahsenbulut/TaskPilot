import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'ali@example.com',
    description: 'Kullanıcının kayıtlı e-posta adresi',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'Kullanıcının şifresi',
  })
  @IsString()
  password!: string;
}

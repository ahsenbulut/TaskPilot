import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'ali@example.com',
    description: 'Kullanıcının e-posta adresi',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'Ali Veli',
    description: 'Kullanıcının adı ve soyadı',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'Kullanıcının şifresi (minimum 6 karakter)',
  })
  @IsString()
  @MinLength(6)
  password!: string;
}

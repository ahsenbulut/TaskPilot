import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Global ValidationPipe eklendi
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // sadece DTO'da tanımlı alanları kabul eder
      forbidNonWhitelisted: true,  // DTO'da olmayan alanlar gönderilirse hata verir
      transform: true               // otomatik tip dönüşümü sağlar
    }),
  );

  await app.listen(3000);
  console.log('🚀 App is running on http://localhost:3000');
}
bootstrap();

import 'reflect-metadata'; // NestJS + TypeORM için genelde önerilir
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('TaskPilot API')
    .setDescription('Kullanıcı, proje ve görev yönetimi API dokümantasyonu')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 App is running on http://localhost:${port}`);
  console.log(`📄 Swagger UI: http://localhost:${port}/api`);
}

bootstrap();

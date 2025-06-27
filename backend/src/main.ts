import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // Swagger config başlıyor
  const config = new DocumentBuilder()
    .setTitle('TaskPilot API')
    .setDescription('Kullanici girişi kayıt ve rol yönetimi API dokümantasyonu')
    .setVersion('1.0')
    .addBearerAuth() // JWT token'ı eklemek için
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // /api adresinde Swagger arayüzü

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

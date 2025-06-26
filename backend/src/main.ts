import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // önce pipes
  await app.listen(process.env.PORT ?? 3000); // sonra listen
}
bootstrap().catch((err) => {
  console.error('Application failed to start', err);
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  console.log(process.env.PORT);
  await app.listen(process.env.PORT || 3030);
}
bootstrap();

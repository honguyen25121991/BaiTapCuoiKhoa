import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(express.static("."))

  const config = new DocumentBuilder().setTitle("Swagger title").build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("swagger", app, document)

  // app.enableCors()
  await app.listen(3000);
}
bootstrap();

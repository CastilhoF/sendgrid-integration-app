import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import { swaggerConfig } from './core/config/documentation/swagger.config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { TransformInterceptor } from './core/middlewares/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const config = swaggerConfig;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService: ConfigService = new ConfigService();

  await app.listen(configService.get('PORT'), configService.get('HOST'));
  Logger.log(`Application listening on: ${await app.getUrl()}`);
}
bootstrap();

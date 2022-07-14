import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { RequestMiddleware } from '../core/middlewares/request.middleware';
import { winston_config } from '../core/config/log/winston.config';
import {
  envFilePath,
  envValidationSchema,
} from '../core/config/env/config.environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      validationSchema: envValidationSchema,
    }),
    WinstonModule.forRoot(winston_config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestMiddleware).forRoutes('*');
  }
}

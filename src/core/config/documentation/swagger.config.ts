import { DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

const configService: ConfigService = new ConfigService();

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Sendgrid Integration API')
  .addServer(configService.get('SWAGGER_SERVER_APP'))
  .setDescription(
    'API for integration between clients and sendgrid, for sending contact e-mails.',
  )
  .setVersion('1.0')
  .build();

import { configEnvironmentsValidation } from './config.env.schema';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const stage: string = configService.get('STAGE');

export const envFilePath = [`.stage.${stage}.env`];
export const envValidationSchema = configEnvironmentsValidation;

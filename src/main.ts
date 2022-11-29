import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConstants } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1')
  app.enableCors()
  await app.listen(appConstants.port);
  console.log(`[bootstrap] server is running on port: ${appConstants.port}`)
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './auth/interceptor/change-body.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  // app.useGlobalInterceptors(new LoggingInterceptor());
}
bootstrap();

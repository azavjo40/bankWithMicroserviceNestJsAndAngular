import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChangeBodyInterceptor } from './auth/interceptor/change-body.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalInterceptors(new ChangeBodyInterceptor());
}
bootstrap();

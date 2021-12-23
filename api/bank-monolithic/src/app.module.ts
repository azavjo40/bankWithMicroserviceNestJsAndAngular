import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChangeBodyInterceptor } from './auth/interceptor/change-body.interceptor';
import { RolesGuard } from './auth/roles/roles.guard';
import { EncryptModule } from './encrypt/encrypt.module';
@Module({
  imports: [AuthModule, EncryptModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ChangeBodyInterceptor,
    },
  ],
})
export class AppModule {}

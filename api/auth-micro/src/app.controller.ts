import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { IAnswerPromise } from './intarface';
@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @UsePipes(new ValidationPipe())
  @MessagePattern({ cmd: 'register' })
  register(registerDto: RegisterDto): Promise<IAnswerPromise> {
    return this.appService.register(registerDto);
  }

  @UsePipes(new ValidationPipe())
  @MessagePattern({ cmd: 'login' })
  login(loginDto: LoginDto): Promise<IAnswerPromise> {
    return this.appService.login(loginDto);
  }
}

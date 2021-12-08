import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  ValidationPipe,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { IAnswerPromise } from './intarface';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  register(
    @Body(new ValidationPipe()) registerDto: RegisterDto,
  ): Observable<IAnswerPromise> {
    return this.authService.register(registerDto);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  login(
    @Body(new ValidationPipe()) loginDto: LoginDto,
  ): Observable<IAnswerPromise> {
    console.log(loginDto);
    return this.authService.login(loginDto);
  }
}

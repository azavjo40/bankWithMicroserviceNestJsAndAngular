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
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { IAnswerPromise } from './intarface';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(
    @Body(new ValidationPipe()) registerDto: RegisterDto,
  ): Observable<IAnswerPromise> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(
    @Body(new ValidationPipe()) loginDto: LoginDto,
  ): Observable<IAnswerPromise> {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Manager, Role.Director)
  @Post('get/role')
  getRoles(@Body() body: any) {
    console.log(body);
    return { message: 'hello from get roles' };
  }
}

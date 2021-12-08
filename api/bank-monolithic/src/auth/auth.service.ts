import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { IAnswerPromise } from './intarface';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  register(registerDto: RegisterDto): Observable<IAnswerPromise> {
    try {
      return this.client.send<any>({ cmd: 'register' }, registerDto);
    } catch (e) {
      console.log(e);
    }
  }

  login(loginDto: LoginDto): Observable<IAnswerPromise> {
    try {
      return this.client.send<any>({ cmd: 'login' }, loginDto);
    } catch (e) {
      console.log(e);
    }
  }
}

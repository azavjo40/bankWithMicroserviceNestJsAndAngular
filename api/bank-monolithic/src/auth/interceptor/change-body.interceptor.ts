import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { EncryptService } from 'src/encrypt/encrypt.service';

@Injectable()
export class ChangeBodyInterceptor implements NestInterceptor {
  constructor(private encryptService: EncryptService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const jwtToken = context.switchToHttp().getRequest().headers.authorization;
    // const decoded: any = jwt_decode(jwtToken);
    console.log(jwtToken);
    if (!req.body) return next.handle();
    // req.body = { lastName: 'Sufiev' };
    // return next.handle().pipe(map((body) => body));
    return next.handle();
  }
}

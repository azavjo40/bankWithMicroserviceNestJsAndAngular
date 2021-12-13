import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    if (!req.body?.bodyCrypto) return next.handle();
    req.body = { lastName: 'Sufiev' };
    return next.handle().pipe(map((body) => (body = 'hello from intercept')));
  }
}

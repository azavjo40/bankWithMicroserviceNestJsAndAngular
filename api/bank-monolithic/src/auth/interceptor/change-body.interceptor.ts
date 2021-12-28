import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { async, map, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { EncryptService } from 'src/encrypt/encrypt.service';

@Injectable()
export class ChangeBodyInterceptor implements NestInterceptor {
  constructor(private encryptService: EncryptService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const jwtToken = context.switchToHttp().getRequest().headers.authorization;
    const decoded: any = jwtToken ? jwt_decode(jwtToken) : null;

    if (req.body?.publicKey) {
      console.log('goode');
      req.body.userId = decoded?._id;
    } else if (req.body) {
      const coll = async () => {
        const a = await this.encryptService
          .decryption({
            userId: decoded?._id,
            timeId: req.body?.timeId,
            data: req.body.data,
          })
          .toPromise();
        console.log(a);
      };
      coll();
    }
    return next.handle();
    // return next.handle().pipe(
    //   map(
    //     async (res: any) =>
    //       (res = await this.encryptService
    //         .encryption({
    //           userId: decoded?._id,
    //           timeId: req.body?.timeId,
    //           publicKey: req.body?.publicKey,
    //           data: res,
    //         })
    //         .toPromise()),
    //   ),
    // );
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { saveDataUser } from 'src/app/constants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private appService: AppService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const storage = this.appService.getItemLocal(saveDataUser);
    if (storage?.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: storage.access_token,
        },
      });
    }
    return next.handle(request);
  }
}

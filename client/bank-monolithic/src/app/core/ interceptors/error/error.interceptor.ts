import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';
import { AlertService } from 'src/app/alert/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private alertService: AlertService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      map((item: any) => {
        if (item?.body?.message) {
          this.alertService.putErrorMessage(item.body.message);
        }
        return item;
      }),
      catchError((err: any) => {
        if (err?.message) {
          this.alertService.putErrorMessage(err.message);
        }
        return throwError(err);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IformLogin } from '../intarface';
import { HttpClient } from '@angular/common/http';
import { serviceUrl, saveDataUser } from '../../constants/index';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private appService: AppService, private http: HttpClient) {}

  login(form: IformLogin): Observable<any> {
    return this.http.post(`${serviceUrl}auth/login`, form).pipe(
      map((item: any) => {
        if (item && !item.message) {
          this.appService.setItemToLocal(item, saveDataUser);
        }
      })
    );
  }
}

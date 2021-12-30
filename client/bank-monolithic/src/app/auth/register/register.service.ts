import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { saveDataUser, serviceUrl } from 'src/app/constants';
import { IFormRegister } from '../intarface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private appService: AppService, private http: HttpClient) {}
  register(form: IFormRegister): Observable<any> {
    return this.http.post(`${serviceUrl}auth/register`, form).pipe(
      map((item: any) => {
        if (item && !item.message) {
          this.appService.setItemToLocal(item, saveDataUser);
        }
      })
    );
  }
}

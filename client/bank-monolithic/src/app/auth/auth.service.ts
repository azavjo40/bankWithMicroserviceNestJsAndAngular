import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppService } from '../app.service';
import { saveDataUser } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private appService: AppService) {}
  subject = new Subject();
  getIsAuth(): Observable<any> {
    return this.subject;
  }
  checkIsAuth(): void {
    const storage = this.appService.getItemLocal(saveDataUser);
    if (storage?.access_token) this.subject.next(true);
    else this.subject.next(false);
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  subject = new Subject();

  showErrorMessage(): Observable<any> {
    return this.subject;
  }

  putErrorMessage(msgs: string): void {
    this.subject.next(msgs);
    setTimeout(() => this.subject.next(''), 3000);
  }
}

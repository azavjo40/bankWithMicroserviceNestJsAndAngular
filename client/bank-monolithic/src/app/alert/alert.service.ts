import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  subject = new Subject();
  showMessages(): Observable<any> {
    return this.subject;
  }

  getMessages(msgs: string): void {
    this.subject.next(msgs);
    setTimeout(() => this.subject.next(''), 3000);
  }
}

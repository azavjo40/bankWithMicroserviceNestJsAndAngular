import { Injectable } from '@angular/core';
import { IformLogin } from '../intarface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(form: IformLogin): any {
    console.log(form);
  }
}

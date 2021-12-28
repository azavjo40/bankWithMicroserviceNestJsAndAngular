import { Injectable } from '@angular/core';
import { IFormRegister } from '../intarface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}
  register(form: IFormRegister): any {
    console.log(form);
  }
}

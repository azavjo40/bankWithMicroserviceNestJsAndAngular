import { Component, OnInit } from '@angular/core';
import { IFormRegister } from '../intarface';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterService) {}

  form: IFormRegister = {
    name: '',
    lastName: '',
    roles: '',
    email: '',
    password: '',
  };
  ngOnInit(): void {}

  changeHandler(): void {}

  register(): void {
    this.registerService.register(this.form);
  }
}

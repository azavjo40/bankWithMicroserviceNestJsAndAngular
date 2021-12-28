import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IFormRegister } from '../intarface';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {}

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
    setTimeout(() => {
      this.form = {
        name: '',
        lastName: '',
        roles: '',
        email: '',
        password: '',
      };
    }, 2000);
  }

  registrationForm = this.fb.group({
    name: [null, [Validators.minLength(2), Validators.required]],
    lastName: [null, [Validators.minLength(2), Validators.required]],
    roles: [null, [Validators.minLength(2), Validators.required]],
    email: [null, [Validators.minLength(11), Validators.required]],
    password: [null, [Validators.minLength(6), Validators.required]],
  });
}

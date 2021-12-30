import { Component, OnInit } from '@angular/core';
import { IformLogin } from '../intarface';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private fb: FormBuilder) {}
  form: IformLogin = { email: '', password: '' };
  ngOnInit(): void {}

  changeHandler(): void {}

  login(): void {
    this.loginService.login(this.form).subscribe();
    setTimeout(() => (this.form = { email: '', password: '' }), 2000);
  }

  registrationForm = this.fb.group({
    email: [null, [Validators.minLength(11), Validators.required]],
    password: [null, [Validators.minLength(6), Validators.required]],
  });
}

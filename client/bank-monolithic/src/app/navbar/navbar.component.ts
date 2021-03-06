import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';
import { saveDataUser } from '../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private appService: AppService
  ) {}
  isAuth = false;
  ngOnInit(): void {
    this.checkIsAuth();
    this.getIsAuth();
  }
  fromEvent(event: string) {
    fromEvent(window, event).subscribe(() => this.authService.checkIsAuth());
  }
  getIsAuth(): void {
    this.authService.getIsAuth().subscribe((bool) => (this.isAuth = bool));
  }
  checkIsAuth() {
    this.fromEvent('load');
    this.fromEvent('click');
  }
  logOut(): void {
    this.appService.removeItemLocal(saveDataUser);
  }
}

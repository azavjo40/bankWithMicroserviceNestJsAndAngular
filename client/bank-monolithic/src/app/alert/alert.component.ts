import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(private alertService: AlertService) {}
  ngOnInit(): void {
    this.showMessages();
  }
  textAlert: any = '';

  showMessages(): void {
    this.alertService
      .showErrorMessage()
      .subscribe((msg) => (this.textAlert = msg));
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule, AuthModule, AppRoutingModule],
  providers: [AlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}

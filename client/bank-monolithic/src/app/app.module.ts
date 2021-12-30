import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule, AuthModule, AppRoutingModule, HttpClientModule],
  providers: [AlertService, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

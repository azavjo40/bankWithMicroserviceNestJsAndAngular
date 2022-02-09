import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { CardsModule } from './cards/cards.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, AlertComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CardsModule,
    HomeModule,
  ],
  providers: [AlertService, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

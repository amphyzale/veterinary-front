import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';

import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/authentication/components/login/login.module';
import { RegisterModule } from './pages/authentication/components/register/register.module';
import { ForgotPasswordModule } from './pages/authentication/components/forgot-password/forgot-password.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    RegisterModule,
    ForgotPasswordModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

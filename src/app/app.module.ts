import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';

import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/authentication/components/login/login.module';
import { RegisterModule } from './pages/authentication/components/register/register.module';
import { ForgotPasswordModule } from './pages/authentication/components/forgot-password/forgot-password.module';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceComponent } from './pages/service/service.component';
import { AdminModule } from './admin/admin.module';
import { ServiceElementComponent } from './shared/components/service-element/service-element.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyAccountUpdateDialogComponent } from './shared/components/dialog-components/my-account-update-dialog/my-account-update-dialog.component';
//import { MyAccountUpdateDialogModule } from './shared/components/dialog-components/my-account-update-dialog/my-account-update-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ServiceComponent,
    ServiceElementComponent,
    ProfileComponent,
    MyAccountComponent,
    ChatComponent,
    MyAccountUpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    RegisterModule,
    ForgotPasswordModule,
    AdminModule,
    BrowserAnimationsModule,
    MatDialogModule,
    //MyAccountUpdateDialogModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

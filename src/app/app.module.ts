import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';

import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/authentication/components/login/login.module';
import { RegisterModule } from './pages/authentication/components/register/register.module';
import { ForgotPasswordModule } from './pages/authentication/components/forgot-password/forgot-password.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './pages/services/services.module';
import { AboutModule } from './pages/about/about.module';
import { ProfileModule } from './pages/profile/profile.module';
import { ChatModule } from './shared/components/chat/chat.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { AccountComponent } from './pages/my-profile/components/account/account.component';
import { AdminDoctorsComponent } from './pages/my-profile/components/admin-doctors/admin-doctors.component';
import { MyProfileModule } from './pages/my-profile/my-profile.module';
import { AccountModule } from './pages/my-profile/components/account/account.module';
import { AdminDoctorsModule } from './pages/my-profile/components/admin-doctors/admin-doctors.module';
//import { MyAccountUpdateDialogModule } from './shared/components/dialog-components/my-account-update-dialog/my-account-update-dialog.module';

// здесь импорты только модулей сначала создается модуль ng g m blablabla затем уже ng g c blablabla в том терминале

@NgModule({
  declarations: [AppComponent], // здесь недолжно быть других деклеров онли appcomponent
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    RegisterModule,
    ForgotPasswordModule,
    BrowserAnimationsModule,
    ServicesModule,
    AboutModule,
    ProfileModule,
    ChatModule,
    MyProfileModule,
    AccountModule,
    AdminDoctorsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

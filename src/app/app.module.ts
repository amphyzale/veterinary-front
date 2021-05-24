import { DoctorsModule } from './pages/doctors/doctors.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

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
import { MyProfileModule } from './pages/my-profile/my-profile.module';
import { AdminModule } from './pages/admin/admin.module';
import { ScheduleModule } from './pages/schedule/schedule.module';
import { AccountModule } from './pages/my-profile/components/account/account.module';
import { AdminDoctorsModule } from './pages/admin/components/admin-doctors/admin-doctors.module';
import { AdminUsersModule } from './pages/admin/components/admin-users/admin-users.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
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
    MyProfileModule,
    ScheduleModule,
    AdminModule,
    AccountModule,
    AdminDoctorsModule,
    AdminUsersModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCU2pE9zMg4oMLomghyXHO0VKbW9eyXDgM'
    }),
    ContactModule,
    DoctorsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { DoctorsComponent } from './pages/doctors/doctors.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/authentication/components/login/login.component';
import { RegisterComponent } from './pages/authentication/components/register/register.component';
import { ForgotPasswordComponent } from './pages/authentication/components/forgot-password/forgot-password.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyAccountComponent } from './pages/profile/components/my-account/my-account.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { ServiceComponent } from './pages/services/components/service/service.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { AdminDoctorsComponent } from './pages/admin/components/admin-doctors/admin-doctors.component';
import { AdminPetsComponent } from './pages/admin/components/admin-pets/admin-pets.component';
import { AdminUsersComponent } from './pages/admin/components/admin-users/admin-users.component';
import { AccountComponent } from './pages/my-profile/components/account/account.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminScheduleComponent } from './pages/admin/components/admin-schedule/admin-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service/:id', component: ServiceComponent },
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: 'my-account', component: MyAccountComponent },
      { path: 'chat', component: ChatComponent }
    ]
  },
  { path: 'my-profile', component: MyProfileComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'chat', component: ChatComponent },
      { path: 'admin-doctors', component: AdminDoctorsComponent },
      { path: 'admin-users', component: AdminUsersComponent },
      { path: 'admin-pets', component: AdminPetsComponent },
      { path: 'admin-schedule', component: AdminScheduleComponent}
    ]
  },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

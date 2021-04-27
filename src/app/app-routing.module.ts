import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/authentication/components/login/login.component';
import { RegisterComponent } from './pages/authentication/components/register/register.component';
import { ForgotPasswordComponent } from './pages/authentication/components/forgot-password/forgot-password.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { ChatComponent } from './shared/components/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'service/:id', component: ServiceComponent},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'profile', component: ProfileComponent, children: [
    { path: 'my-account', component: MyAccountComponent},
    { path: 'chat', component: ChatComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

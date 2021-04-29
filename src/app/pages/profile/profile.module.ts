import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MyAccountComponent } from './components/my-account/my-account.component';



@NgModule({
  declarations: [ProfileComponent, MyAccountComponent],
  imports: [CommonModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}

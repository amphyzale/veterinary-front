import { ChatModule } from './../../shared/components/chat/chat.module';
import { PetsModule } from './components/pets/pets.module';
import { AccountModule } from './components/account/account.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    AccountModule,
    PetsModule,
    ChatModule
  ],
  exports: [MyProfileComponent],
})
export class MyProfileModule { }

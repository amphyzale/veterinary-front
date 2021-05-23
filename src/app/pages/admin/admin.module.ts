import { RouterModule } from '@angular/router';
import { AdminUsersModule } from './components/admin-users/admin-users.module';
import { AdminPetsModule } from './components/admin-pets/admin-pets.module';
import { AdminDoctorsModule } from './components/admin-doctors/admin-doctors.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminDoctorsModule,
    AdminPetsModule,
    AdminUsersModule,
    RouterModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

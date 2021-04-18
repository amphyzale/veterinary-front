import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { CreateServiceComponent } from './pages/create-service/create-service.component';
import { EditServiceComponent } from './pages/edit-service/edit-service.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        CreateServiceComponent,
        EditServiceComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    { path: 'login', component: LoginComponent},
                    { path: 'create', component: CreateServiceComponent},
                    { path: 'service/:id/edit', component: EditServiceComponent}
                ]
            }
        ])
    ], 
    exports: [RouterModule]
})

export class AdminModule {

}
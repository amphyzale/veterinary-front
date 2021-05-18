import { NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { AdminUsersComponent } from "./admin-users.component";

@NgModule({
  declarations: [AdminUsersComponent],
  imports: [DxDataGridModule],
  bootstrap: [AdminUsersComponent],
})
export class AdminUsersModule {}

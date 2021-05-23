import { NgModule } from "@angular/core";
import { DxButtonModule, DxDataGridModule, DxTextBoxModule } from "devextreme-angular";
import { AdminUsersComponent } from "./admin-users.component";

@NgModule({
  declarations: [AdminUsersComponent],
  imports: [DxDataGridModule, DxTextBoxModule, DxButtonModule],
  bootstrap: [AdminUsersComponent],
})
export class AdminUsersModule {}

import { NgModule } from "@angular/core";
import {
  DxButtonModule,
  DxDataGridModule,
  DxTextBoxModule,
} from "devextreme-angular";
import { AdminDoctorsComponent } from "./admin-doctors.component";

@NgModule({
  declarations: [AdminDoctorsComponent],
  imports: [DxDataGridModule, DxTextBoxModule, DxButtonModule],
  bootstrap: [AdminDoctorsComponent],
})
export class AdminDoctorsModule {}

import { NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { AdminDoctorsComponent } from "./admin-doctors.component";

@NgModule({
  declarations: [AdminDoctorsComponent],
  imports: [DxDataGridModule],
  bootstrap: [AdminDoctorsComponent],
})
export class AdminDoctorsModule {}

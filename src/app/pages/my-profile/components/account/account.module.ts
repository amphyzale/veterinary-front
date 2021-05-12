import { NgModule } from "@angular/core";
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxTextBoxModule, DxScrollViewModule } from "devextreme-angular";
import { AccountComponent } from "./account.component";

@NgModule({
  imports: [
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxTextBoxModule,
    DxScrollViewModule,
  ],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountModule {}

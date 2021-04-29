import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServiceElementComponent } from './components/service-element/service-element.component';
import { ServiceComponent } from './components/service/service.component';



@NgModule({
  declarations: [ServicesComponent, ServiceComponent, ServiceElementComponent],
  imports: [CommonModule],
  exports: [ServicesComponent],
})
export class ServicesModule {}

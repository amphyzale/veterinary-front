import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [ContactComponent],
    imports: [
        AgmCoreModule
    ],
})
export class ContactModule { }
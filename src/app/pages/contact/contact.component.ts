import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  lat = 37.77052443477112;
  lng = -122.3871033448855;
  zoom: number = 16;
}

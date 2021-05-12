/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.less']
})
export class AdminDoctorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { NgModule, Component} from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Service, Doctor/*, State*/ } from '../../shared/admin-doctors.service';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.less'],
  providers: [Service]
})
export class AdminDoctorsComponent {
    dataSource: Doctor[];
    //states: State[];

    constructor(private service: Service) {
        this.dataSource = this.service.getDoctors();
        //this.states = service.getStates();
    }
}



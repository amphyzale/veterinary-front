import { ServicesModel } from './../../shared/models/services.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [HomeService]
})
export class HomeComponent {

  promoServices: ServicesModel[];

  constructor(private service: HomeService) {
    this.service.getPromoServices().subscribe(services => this.promoServices = services);
  }

}

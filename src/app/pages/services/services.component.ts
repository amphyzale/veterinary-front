import { Component, OnInit } from '@angular/core';
import { ServicesService } from './shared/services.service';

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.less"],
  providers: [ServicesService],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

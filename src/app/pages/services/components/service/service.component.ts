import { Component, OnInit } from "@angular/core";
import { ServicesModel } from "src/app/shared/models/services.model";
import { ServicesService } from "../../shared/services.service";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.less"],
  providers: [ServicesService]
})
export class ServiceComponent {
  dataSource: ServicesModel[] = [];

  constructor(private service: ServicesService) {
    this.service.getServices().subscribe((services) => this.dataSource = services);
  }

 
}

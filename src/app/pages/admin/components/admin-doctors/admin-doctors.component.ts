import { Component } from "@angular/core";
import { dateTimeFormat } from "src/app/shared/functions/date-time-format";
import { DoctorService } from "./shared/admin-doctors.service";
import { DoctorModel } from "./shared/doctor.model";

@Component({
  selector: "app-admin-doctors",
  templateUrl: "./admin-doctors.component.html",
  styleUrls: ["./admin-doctors.component.less"],
  providers: [DoctorService],
})
export class AdminDoctorsComponent {

  dateTimeFormat = dateTimeFormat;

  searchQuery: string = "";

  dataSource: DoctorModel[] = [];

  constructor(private service: DoctorService) {
    this.getDoctors();
  }

  getDoctors() {
    this.service.getDoctors().subscribe((doctors) => this.dataSource = doctors);
  }

  findDoctor() {
    this.service.findDoctor(this.searchQuery).subscribe((doctors) => {
      this.dataSource = doctors;
    });
  }

}

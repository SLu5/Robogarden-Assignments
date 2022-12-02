import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from "../getcities.service";
import { CityInfo } from './cities-info';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: CityInfo[];
  color: boolean;
  constructor(private _cities: GetcitiesService) {
    this.cities = [];
    this.color = false;
  }

  ngOnInit(): void {
    this.cities = this._cities.getCities();
    this.color = this.colorit();
  }
  colorit():boolean {
    for (var i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractions.length < 3) {
        return false;
      }
    }
    return true
  }
}

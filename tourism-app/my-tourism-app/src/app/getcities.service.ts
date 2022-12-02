import { Injectable } from '@angular/core';
import { CityInfo } from './cities/cities-info';
import { citiesInfo } from './cities/cities-info-data'
@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {
 
  constructor() { }
  getCities(): CityInfo[] {
    return citiesInfo;
  }
}

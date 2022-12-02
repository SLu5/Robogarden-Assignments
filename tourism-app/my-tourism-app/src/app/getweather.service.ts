import { Injectable } from '@angular/core';
import { citiesWeather} from './cities/cities-info-data';
@Injectable({
  providedIn: 'root'
})
export class GetweatherService {
  getWeather() {
    return citiesWeather;
  }
  constructor() {}
}

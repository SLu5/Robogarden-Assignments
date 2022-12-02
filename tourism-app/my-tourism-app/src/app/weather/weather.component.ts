import { Component, OnInit } from '@angular/core';
import { GetweatherService } from '../getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData!: any;
  constructor(private _weatherData:GetweatherService) { }

  ngOnInit(): void {
    this.weatherData = this._weatherData.getWeather();
  }

}

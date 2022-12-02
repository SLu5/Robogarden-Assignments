import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {

  details!: {
    name: string,
    summerM: number,
    summerN: number,
    winterM: number,
    winterN: number,
    springM: number,
    springN: number,
    autumnM: number,
    autumnN: number,
    visitFrom: string,
    visitTo: string
  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.details = {
      name: this.route.snapshot.params['name'],
      summerM: this.route.snapshot.params['summerM'],
      summerN: this.route.snapshot.params['summerN'],
      winterM: this.route.snapshot.params['winterM'],
      winterN: this.route.snapshot.params['winterN'],
      springM: this.route.snapshot.params['springM'],
      springN: this.route.snapshot.params['springN'],
      autumnM: this.route.snapshot.params['autumnM'],
      autumnN: this.route.snapshot.params['autumnN'],
      visitFrom: this.route.snapshot.params['visitFrom'],
      visitTo: this.route.snapshot.params['visitTo'],
    }
  }
}


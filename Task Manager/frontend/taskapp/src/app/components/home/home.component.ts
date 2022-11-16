import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photo: String = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png";

  constructor() { }

  ngOnInit(): void {
  }

}


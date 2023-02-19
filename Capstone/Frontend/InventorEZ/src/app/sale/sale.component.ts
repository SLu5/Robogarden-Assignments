import { Component,Input, OnInit } from '@angular/core';
import { Isales } from '../isales';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  @Input() sale!: Isales
  constructor() { }

  ngOnInit(): void{}

}

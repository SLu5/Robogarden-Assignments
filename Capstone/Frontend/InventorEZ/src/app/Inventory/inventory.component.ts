import { Component, Input, OnInit } from '@angular/core';
import { CurrencyDisplayComponent } from '../currency-display/currency-display.component';
import { Iinventory } from '../iinventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {

  @Input() inventory!: Iinventory;

  constructor() { }

  ngOnInit(): void {}

}

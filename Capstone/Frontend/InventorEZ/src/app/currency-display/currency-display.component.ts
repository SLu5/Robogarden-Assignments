import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
@Component({
  selector: 'app-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss'],
})
export class CurrencyDisplayComponent implements OnInit {

  @Input() value: number = 0;
  priceString: String = '100';
  price: any;

  
  constructor(private currencyPipe: CurrencyPipe) {
    this.price = this.currencyPipe.transform(this.priceString);
  }

  ngOnInit() {}

}

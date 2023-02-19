import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
@Component({
  selector: 'app-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss'],
})
export class CurrencyDisplayComponent implements OnInit {

  @Input() value: number = 0;
 

  
  constructor(private currencyPipe: CurrencyPipe) {
    
  }

  ngOnInit() {}

}

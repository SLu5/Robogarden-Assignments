import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CurrencyDisplayComponent } from '../currency-display/currency-display.component';
import { CurrencyDisplayModule } from '../currency-display/currency-display.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CurrencyDisplayModule,
    CurrencyPipe
  ],
  declarations: [Tab1Page, ],
  providers: [CurrencyPipe]
})
export class Tab1PageModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { ImportnatTextDirective } from './importnat-text.directive';
import { TechIdeasComponent } from './tech-ideas/tech-ideas.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    WeatherdetailsComponent,
    ImportnatTextDirective,
    TechIdeasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { GeteventsService } from '../getevents.service';
import { EventData } from './Models/EventData';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  events: EventData[];
  constructor(private _events: GeteventsService) {
    this.events = [];}

  ngOnInit(): void {
    this.events = this._events.getEvents();
  }
}

import { Injectable } from '@angular/core';
import { EventData } from './tab1/Models/EventData';
import { eventsData } from './tab1/Models/EventData-data';

@Injectable({
  providedIn: 'root'
})
export class GeteventsService {

  constructor() { }
  getEvents(): EventData[] {
    return eventsData;
  }
}

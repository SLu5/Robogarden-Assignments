import { Injectable } from '@angular/core';

import { ReminderData } from './tab2/Models/ReminderData';
import { remindersData } from './tab2/Models/ReminderData-data';

@Injectable({
  providedIn: 'root'
})
export class GetremindersService {

  constructor() { }
  getReminders(): ReminderData[] {
    return remindersData;
  }
}

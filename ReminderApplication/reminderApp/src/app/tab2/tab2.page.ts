import { Component, OnInit } from '@angular/core';
import { GetremindersService } from '../getreminders.service';
import { ReminderData } from './Models/ReminderData';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  reminders: ReminderData[];
  constructor(private _reminders: GetremindersService) {
    this.reminders = [];
  }

  ngOnInit(): void {
    this.reminders = this._reminders.getReminders();



  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!:Itask;

  constructor() { }

  ngOnInit(): void {
  }

}

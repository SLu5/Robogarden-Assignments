import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

//export class AddTaskComponent implements OnInit {
//  form: FormGroup = new FormGroup({
//    title: new FormControl('', [Validators.required]),
//    description: new FormControl('', [Validators.required]),
//    date: new FormControl('', [Validators.required]),
//    time: new FormControl('', [Validators.required]),
//    priority_level: new FormControl('', [Validators.required]),
//    category: new FormControl('', [Validators.required]),
//    progress_level: new FormControl('', [Validators.required]),
//  });


export class AddTaskComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      title: ["", [Validators.minLength(3), Validators.required, Validators.maxLength(40)]],
      description: ["", [Validators.required]],
      date: ["", [Validators.required]],
      time: ["", [Validators.required]],
      priority_level: ["", [Validators.required]],
      category: ["", [Validators.required]],
      progress_level: ["", [Validators.required]]
    });
  }


  get title() {
    return this.userForm.get('title');
  }
  get description() {
    return this.userForm.get('description');
  }
  get date() {
    return this.userForm.get('date');
  }
  get time() {
    return this.userForm.get('time');
  }
  get priority_level() {
    return this.userForm.get('priority_level');
  }
  get category() {
    return this.userForm.get('category');
  }
  get progress_level() {
    return this.userForm.get('progress_level');
  }

  add_task() {
    console.log(this.userForm.value)
  }

  ngOnInit(): void {
  }

}

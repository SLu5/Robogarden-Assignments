import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl,  } from '@angular/forms';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';

@Component({
  selector: 'app-inventorys',
  templateUrl: './inventorys.component.html',
  styleUrls: ['./inventorys.component.scss'],
})
export class InventorysComponent implements OnInit {
  @Input() inventorys!: Iinventory[];
  userForm: FormGroup;
  constructor(private service: InventorysService, private formBuilder: FormBuilder,) {
    /*service.getInventorys().subscribe((results) => {
      this.inventorys = results;

    });*/

    this.userForm = formBuilder.group({
      name: [""]
    })

  }

  ngOnInit(): void {}

  find_Name() {
    const name = this.userForm.value;
    console.log(name);
    this.service.getNameFilter(name.name).subscribe({
      next: (data) => {
        console.log(name);
        this.inventorys = data;
        console.log(data);
      },
    });
  };

  reset() {
    this.service.getInventorys().subscribe({
      next: (data) => {
        console.log(data);
        this.inventorys = data;
      }


    })
  
}
}

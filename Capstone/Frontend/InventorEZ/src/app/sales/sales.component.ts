import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl,  } from '@angular/forms';
import { InventorysService } from '../inventorys.service';
import { Isales } from '../isales';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  
  @Input() sales!: Isales[];
  userForm: FormGroup;
  constructor(private service: InventorysService, private formBuilder: FormBuilder, ) {
    service.getSales().subscribe((results) => {this.sales=results;
    });

    this.userForm = formBuilder.group({
      date: [""]
    })
}

  ngOnInit(): void {}
  ionViewWillEnter() {
    console.log("Tab 3");
    this.service.getSales().subscribe((results) => {

      this.sales = results;

    });

  }


  find_Date() {
    const date = this.userForm.value;
    console.log(date);
    this.service.getSaleDate(date.date).subscribe({
      next: (data) => {
        console.log(date);
        this.sales = data;
        console.log(data);
      },

    });
  }
  reset() {
    this.service.getSales().subscribe({
      next: (data) => {
        console.log(data);
        this.sales = data;
      }


    })

  }
}

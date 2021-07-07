import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  isExpandOrder: boolean = false;
  isExpandCustomer: boolean = false;
  isExpandEmployee: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandOrder(){
    this.isExpandOrder = !this.isExpandOrder;
  }
  expandCustomer(){
    this.isExpandCustomer = !this.isExpandCustomer;
  }
  expandEmployee(){
    this.isExpandEmployee = !this.isExpandEmployee;
  }
}

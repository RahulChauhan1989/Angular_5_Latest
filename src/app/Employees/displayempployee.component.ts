import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Model/employee.model';

@Component({
  selector: 'app-displayempployee',
  templateUrl: './displayempployee.component.html',
  styleUrls: ['./displayempployee.component.css']
})
export class DisplayempployeeComponent implements OnInit {

  @Input() employeedisplay:Employee;
  constructor() { }

  ngOnInit() {
  }
  
  getNameAndGender():string
  {
    return this.employeedisplay.name+"--"+this.employeedisplay.gender;
  }
}

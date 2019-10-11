import { Component, OnInit } from '@angular/core';
import {Employee} from '../Model/employee.model';
import { employeeService } from '../Shared/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

 /*  id:number;
    name:string;
    gender:string;
    email?:string;
    phonenumber?:number;
    dateofbirth:Date;
    department:string;
    isactive:boolean; */

    employee:Employee[];
    empToDisplay:Employee;
    private arrayIndex=1;
  constructor(private _employeeService:employeeService) { }

  ngOnInit() {
    this.employee=this._employeeService.getEmployee();
    this.empToDisplay=this.employee[0];
  }
  nextEmp():void
  {
    if(this.arrayIndex<=2)
    {      
      this.empToDisplay=this.employee[this.arrayIndex];
      this.arrayIndex++;
    }
    else
    {
      this.empToDisplay=this.employee[0];
      this.arrayIndex=1;
    }

  }

}

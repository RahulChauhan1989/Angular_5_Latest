import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../Model/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {Employee} from  '../Model/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // Department_Form=null;
  @ViewChild('empform1') public CreateEmpForm:NgForm;
  Department_Form="-1";

datepickerconfig:Partial<BsDatepickerConfig>;
department:Department[]=[
{value:1,deptName:"IT"},
{value:2,deptName:"Admin"},
{value:3,deptName:"Finance"},
{value:4,deptName:"Accounts"},
];

employee:Employee=
{
  id:null,
  name:null,
  gender:null,
  email:null,
  phonenumber:null,
  dateofbirth:null,
  department:null,
  isactive:null
};

  constructor() {
   this.datepickerconfig=Object.assign({},
   {
    containerClass:'theme-dark-blue'
   });

   }

  ngOnInit() {
  }

  SaveEmployee()
  {
    console.debug("entered ");
  }
  SaveEmployeeModel(newEmp:Employee)
  {
   console.log(newEmp);
  }

}

import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee.model';

@Injectable()
export class employeeService
{
    employee:Employee[]=[
        {
          id:1,
          name:"Rahul",
          gender:"Male",
          email:"rahul@gmail.com",
          phonenumber:8787876789,
          dateofbirth:new Date('11/08/1992'),
          department:"IT",
          isactive:true
        },
        {
         id:2,
         name:"Rahul2",
         gender:"Male2",
         email:"rahul2@gmail.com",
         phonenumber:8787876782,
         dateofbirth:new Date('12/08/1991'),
         department:"IT2",
         isactive:true
       },
       {
         id:3,
         name:"Rahul3",
         gender:"Male3",
         email:"rahul3@gmail.com",
         phonenumber:8787876783,
         dateofbirth:new Date('11/08/1993'),
         department:"IT3",
         isactive:true
       }
      ]

      getEmployee():Employee[]
      {
          return this.employee;
      }

}
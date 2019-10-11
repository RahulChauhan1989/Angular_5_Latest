import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './Employees/list-employee.component';
import { CreateEmployeeComponent } from './Employees/create-employee.component';
import { CreateEmployeeCanDeactivate } from './Shared/CreateEmployeeCanDeactivateRoute.service';


const routes: Routes = [
{path:"list",component:ListEmployeeComponent},
{path:"create",component:CreateEmployeeComponent,canDeactivate:[CreateEmployeeCanDeactivate]},
{path:"",redirectTo:"/create",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

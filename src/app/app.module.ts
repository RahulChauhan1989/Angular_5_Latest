import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './Employees/create-employee.component';
import { ListEmployeeComponent } from './Employees/list-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {selectRequiredvalidator} from './Shared/select-required-validator.directive';
import {ConfirmEqualValidatorDirective} from './Shared/password-confirmpassword-validator.directive';
import {employeeService} from './Shared/employee.service';
import { DisplayempployeeComponent } from './Employees/displayempployee.component';
import {CreateEmployeeCanDeactivate} from './Shared/CreateEmployeeCanDeactivateRoute.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    selectRequiredvalidator,
    ConfirmEqualValidatorDirective,
    DisplayempployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    
  ],
  providers: [employeeService,CreateEmployeeCanDeactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }

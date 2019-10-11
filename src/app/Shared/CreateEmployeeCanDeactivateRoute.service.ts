import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../Employees/create-employee.component';

export class CreateEmployeeCanDeactivate implements CanDeactivate<CreateEmployeeComponent>
{
    canDeactivate(component:CreateEmployeeComponent):boolean
    {
        if(component.CreateEmpForm.dirty)
        {
            return confirm("Are you sure you want to discard your changes ?");

        }
        return true
    }
}
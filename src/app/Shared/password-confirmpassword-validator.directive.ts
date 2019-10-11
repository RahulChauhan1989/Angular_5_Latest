import {Directive,Input} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector:'[appConfirmEqualValidator]',
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:ConfirmEqualValidatorDirective,
            multi:true
        }
    ]

})

export class ConfirmEqualValidatorDirective implements Validator
{
    // @Input() appConfirmEqualValidator:string;
    validate(passwordGrp:AbstractControl):{[key:string]:any}|null{
        const passwordvalue=passwordGrp.get('passwordName');
        const confirmpasswordvalue=passwordGrp.get('confirmpassword');
        console.debug("passwordvalue " + passwordvalue.value);   
        console.debug("confirmpasswordvalue " +confirmpasswordvalue.value);
        if(passwordvalue && confirmpasswordvalue && passwordvalue.value!==confirmpasswordvalue.value)
        {
            return {'notEqual':true}
        }
        return null;
    }

}
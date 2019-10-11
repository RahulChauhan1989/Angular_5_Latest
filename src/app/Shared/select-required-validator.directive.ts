
import {Directive,Input} from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive
({
    selector:'[appSelectvalidator]',
    providers:[
       {
           provide:NG_VALIDATORS,
           useExisting:selectRequiredvalidator,
           multi:true
       }
    ]

})

export class selectRequiredvalidator implements Validator
{
    @Input() appSelectvalidator:string;
    validate(control:AbstractControl):{[key:string]:any}|null
    {       
        return control.value===this.appSelectvalidator?{'defaultselected':true}:null;
    }

}
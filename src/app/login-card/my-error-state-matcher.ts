import { ErrorStateMatcher } from "@angular/material/core";
import { AbstractControl, FormControl, FormGroupDirective, NgForm } from "@angular/forms";

export class MyErrorStateMatcher implements ErrorStateMatcher{
    isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
        //return false;
        if (form?.submitted) {
            return true;
        }
        else{
            return false;
        }
    }
}
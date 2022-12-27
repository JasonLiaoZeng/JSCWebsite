import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit{
  code!: FormControl;
  constructor(){}

  ngOnInit(){
    this.code = new FormControl('',{validators:[this.codeValidator]});
  }

   codeValidator(control: AbstractControl) : { [key: string]: boolean } | null {
    if (control.value == "") {
      return { 'code_invalid': true };
    }
    return null;
  }
  
  submit(){
    console.log(this.code.value);
  } 
}

/*function codeValidator(control: AbstractControl): { [key: string]: boolean } | null {

  if (control.value == "") {
      return { 'code_invalid': true };
  }
  return null;
} */
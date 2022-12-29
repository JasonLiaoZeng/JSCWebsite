import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, NgForm} from '@angular/forms';
import { __values } from 'tslib';
import { MyErrorStateMatcher } from './my-error-state-matcher';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit{
  code!: FormControl;
  myErrorStateMatcher = new MyErrorStateMatcher();

  validCodes =  {
    "code":{
        "Guest": "Guest",
        "990824890": "Jason"
    }
  };

  constructor(){}

  ngOnInit(){
    this.code = new FormControl('');
  }
  
  submit(){
    if(this.code.value in this.validCodes.code) {
      console.log("Login Success!");
    }
    else {
      console.log("Login Failed!");
    }
  } 
}

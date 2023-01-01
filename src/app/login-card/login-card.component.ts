import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, NgForm} from '@angular/forms';
import { __values } from 'tslib';
import { MyErrorStateMatcher } from './my-error-state-matcher';
import {LoginStatusService} from "../shared/login-status.service";
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private status:LoginStatusService,
    private route: ActivatedRoute,
    private router: Router
    ){
  }

  ngOnInit(){
    this.code = new FormControl('');
  }
  
  submit(){
    if(this.code.value in this.validCodes.code) {
      this.status.setLoginStatus(true);
      this.status.sendLoginEvent();
      console.log(this.status.getLoginStatus());
      console.log("Login Success!");
      this.router.navigate(['logged-in-home-page']);
    }
    else {
      this.status.setLoginStatus(false);
      this.status.sendLoginEvent();
      console.log(this.status.getLoginStatus())
      console.log("Login Failed!");
    }
  } 
}

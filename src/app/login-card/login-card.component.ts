import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, NgForm} from '@angular/forms';
import { MyErrorStateMatcher } from './my-error-state-matcher';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit{
  code!: FormControl;
  myErrorStateMatcher = new MyErrorStateMatcher();
  constructor(){}

  ngOnInit(){
    this.code = new FormControl('');
  }
  
  submit(){
    console.log(this.code.value);
  } 
}

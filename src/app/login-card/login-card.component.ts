import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit{
  code!: FormControl;
  codeChecked!: Boolean;
  constructor(){}

  ngOnInit(){
    this.code = new FormControl('',[Validators.required])
    this.codeChecked = false
  }

  checkCode(){
    console.log(this.code.value)
  }
}

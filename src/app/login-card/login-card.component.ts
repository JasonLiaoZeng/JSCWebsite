import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit{
  code!: FormControl;
  constructor(){}

  ngOnInit(){
    this.code = new FormControl()
  }

  checkCode(){
    console.log(this.code.value)
  }
}

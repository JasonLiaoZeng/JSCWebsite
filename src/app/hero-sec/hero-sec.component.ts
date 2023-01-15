import { Component, OnInit } from '@angular/core';
import {LoginStatusService} from "../shared/login-status.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-sec',
  templateUrl: './hero-sec.component.html',
  styleUrls: ['./hero-sec.component.css']
})
export class HeroSecComponent {
  loginStatus?: boolean;
  loginName?:string;
  loginEventSubscription:Subscription;

  constructor(private status:LoginStatusService){
    this.loginEventSubscription = this.status.getLoginEvent().subscribe(()=>this.loginStatus=status.getLoginStatus());
  }

  ngOnInit(): void {
    this.loginStatus = this.status.getLoginStatus();
    this.loginName = this.status.getLoginName();
  }
}

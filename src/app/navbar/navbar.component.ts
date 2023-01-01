import { Component, OnInit } from '@angular/core';
import {LoginStatusService} from "../shared/login-status.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  loginStatus?: boolean;
  loginEventSubscription:Subscription;

  constructor(private status:LoginStatusService){
    this.loginEventSubscription = this.status.getLoginEvent().subscribe(()=>this.loginStatus=status.getLoginStatus());
  }

  ngOnInit(): void {
    this.loginStatus = this.status.getLoginStatus();
  }
}

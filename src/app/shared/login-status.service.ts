import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  loginStatus:boolean;
  loginName:string;
  private subject = new Subject<any>();

  constructor() { 
    this.loginStatus = false;
    this.loginName="";
  }

  login(status:boolean, name:string){
    this.setLoginStatus(status);
    this.setLoginName(name);
    this.sendLoginEvent();
  }

  setLoginStatus(status:boolean){
    this.loginStatus = status;
  }

  setLoginName(name:string) {
    this.loginName = name;
  }

  getLoginStatus(){
    return this.loginStatus;
  }

  sendLoginEvent(){
    this.subject.next(true);
  }

  getLoginEvent() {
    return this.subject.asObservable();
  }

  getLoginName(){
    return this.loginName;
  }

}

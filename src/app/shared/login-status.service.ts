import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  loginStatus:boolean;
  private subject = new Subject<any>();

  constructor() { this.loginStatus = false;}

  setLoginStatus(status:boolean){
    this.loginStatus = status;
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

}

import { Component } from '@angular/core';
import {LoginStatusService} from "../shared/login-status.service";

@Component({
  selector: 'app-logged-in-home-page',
  templateUrl: './logged-in-home-page.component.html',
  styleUrls: ['./logged-in-home-page.component.css']
})
export class LoggedInHomePageComponent{

  constructor(status:LoginStatusService){
    status.setLoginStatus(true);
  }
}

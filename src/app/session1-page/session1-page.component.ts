import { Component } from '@angular/core';
import { LoginStatusService } from '../shared/login-status.service';

@Component({
  selector: 'app-session1-page',
  templateUrl: './session1-page.component.html',
  styleUrls: ['./session1-page.component.css']
})
export class Session1PageComponent {
  constructor(status:LoginStatusService){
    status.setLoginStatus(true);
  }
}

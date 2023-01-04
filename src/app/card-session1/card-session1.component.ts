import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card-session1',
  templateUrl: './card-session1.component.html',
  styleUrls: ['./card-session1.component.css']
})
export class CardSession1Component {
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){
  }

  jumpToSession(){
    this.router.navigate(['session1-page']);
  }
}

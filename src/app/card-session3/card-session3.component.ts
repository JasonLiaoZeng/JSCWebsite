import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-card-session3',
  templateUrl: './card-session3.component.html',
  styleUrls: ['./card-session3.component.css']
})
export class CardSession3Component {
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){
  }

  jumpToSession(){
    this.router.navigate(['session3-page']);
  }
}

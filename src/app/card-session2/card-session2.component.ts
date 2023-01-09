import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-card-session2',
  templateUrl: './card-session2.component.html',
  styleUrls: ['./card-session2.component.css']
})
export class CardSession2Component {
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){
  }

  jumpToSession(){
    this.router.navigate(['session2-page']);
  }
}

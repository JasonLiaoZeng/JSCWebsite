import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ){
  }

  jumpToSession1(){
    this.router.navigate(['session1-page']);
  }
}

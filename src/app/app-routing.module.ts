import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UnlockPageComponent } from './unlock-page/unlock-page.component';

const routes: Routes = [
  {path: 'home_page', component: HomePageComponent},
  {path: 'unlock_page', component: UnlockPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

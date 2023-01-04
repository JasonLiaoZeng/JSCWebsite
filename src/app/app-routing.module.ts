import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UnlockPageComponent } from './unlock-page/unlock-page.component';
import { LoggedInHomePageComponent } from './logged-in-home-page/logged-in-home-page.component';
import { Session1PageComponent } from './session1-page/session1-page.component';

const routes: Routes = [
  {path: '' ,  component: HomePageComponent},
  {path: 'unlock_page', component: UnlockPageComponent},
  {path:'logged-in-home-page', component: LoggedInHomePageComponent},
  {path:'session1-page', component: Session1PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

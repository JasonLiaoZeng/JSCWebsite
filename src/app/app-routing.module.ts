import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UnlockPageComponent } from './unlock-page/unlock-page.component';
import { Session1PageComponent } from './session1-page/session1-page.component';
import { Session2PageComponent } from './session2-page/session2-page.component';

const routes: Routes = [
  {path: '' ,  component: HomePageComponent},
  {path: 'unlock_page', component: UnlockPageComponent},
  {path:'session1-page', component: Session1PageComponent},
  {path:'session2-page', component: Session2PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnlockPageComponent } from './unlock-page/unlock-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSecComponent } from './hero-sec/hero-sec.component';
import { LoginCardComponent } from './login-card/login-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardSession1Component } from './card-session1/card-session1.component';
import { CardSession2Component } from './card-session2/card-session2.component';
import { CardSession3Component } from './card-session3/card-session3.component';
import { Session1PageComponent } from './session1-page/session1-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { Session1LectureComponent } from './session1-lecture/session1-lecture.component';
import { Session1StudyMaterialsComponent } from './session1-study-materials/session1-study-materials.component';
import { Session1ProjectComponent } from './session1-project/session1-project.component';
import { Session1ProjectPopularGamesGridComponent } from './session1-project-popular-games-grid/session1-project-popular-games-grid.component';
import { Session2PageComponent } from './session2-page/session2-page.component';
import { Session2LectureComponent } from './session2-lecture/session2-lecture.component';
import { Session2StudyMaterialsComponent } from './session2-study-materials/session2-study-materials.component';
import { Session2ProjectComponent } from './session2-project/session2-project.component';
import { Session3PageComponent } from './session3-page/session3-page.component';
import { Session3LectureComponent } from './session3-lecture/session3-lecture.component';
import { Session3StudyMaterialsComponent } from './session3-study-materials/session3-study-materials.component';
import { Session3ProjectComponent } from './session3-project/session3-project.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    UnlockPageComponent,
    FooterComponent,
    HeroSecComponent,
    LoginCardComponent,
    MenuComponent,
    CardSession1Component,
    CardSession2Component,
    CardSession3Component,
    Session1PageComponent,
    Session1LectureComponent,
    Session1StudyMaterialsComponent,
    Session1ProjectComponent,
    Session1ProjectPopularGamesGridComponent,
    Session2PageComponent,
    Session2LectureComponent,
    Session2StudyMaterialsComponent,
    Session2ProjectComponent,
    Session3PageComponent,
    Session3LectureComponent,
    Session3StudyMaterialsComponent,
    Session3ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

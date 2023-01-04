import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1ProjectPopularGamesGridComponent } from './session1-project-popular-games-grid.component';

describe('Session1ProjectPopularGamesGridComponent', () => {
  let component: Session1ProjectPopularGamesGridComponent;
  let fixture: ComponentFixture<Session1ProjectPopularGamesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session1ProjectPopularGamesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session1ProjectPopularGamesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

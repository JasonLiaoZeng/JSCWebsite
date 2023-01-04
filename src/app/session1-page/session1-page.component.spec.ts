import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1PageComponent } from './session1-page.component';

describe('Session1PageComponent', () => {
  let component: Session1PageComponent;
  let fixture: ComponentFixture<Session1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

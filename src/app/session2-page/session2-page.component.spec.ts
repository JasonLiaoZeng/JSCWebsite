import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2PageComponent } from './session2-page.component';

describe('Session2PageComponent', () => {
  let component: Session2PageComponent;
  let fixture: ComponentFixture<Session2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

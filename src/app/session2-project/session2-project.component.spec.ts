import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2ProjectComponent } from './session2-project.component';

describe('Session2ProjectComponent', () => {
  let component: Session2ProjectComponent;
  let fixture: ComponentFixture<Session2ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session2ProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session2ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

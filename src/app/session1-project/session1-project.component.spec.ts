import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1ProjectComponent } from './session1-project.component';

describe('Session1ProjectComponent', () => {
  let component: Session1ProjectComponent;
  let fixture: ComponentFixture<Session1ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session1ProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session1ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

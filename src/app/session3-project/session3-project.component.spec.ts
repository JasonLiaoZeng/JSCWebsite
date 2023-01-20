import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session3ProjectComponent } from './session3-project.component';

describe('Session3ProjectComponent', () => {
  let component: Session3ProjectComponent;
  let fixture: ComponentFixture<Session3ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session3ProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session3ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session3PageComponent } from './session3-page.component';

describe('Session3PageComponent', () => {
  let component: Session3PageComponent;
  let fixture: ComponentFixture<Session3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session3PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

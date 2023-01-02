import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSession1Component } from './card-session1.component';

describe('CardSession1Component', () => {
  let component: CardSession1Component;
  let fixture: ComponentFixture<CardSession1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSession1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

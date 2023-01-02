import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSession2Component } from './card-session2.component';

describe('CardSession2Component', () => {
  let component: CardSession2Component;
  let fixture: ComponentFixture<CardSession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSession2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

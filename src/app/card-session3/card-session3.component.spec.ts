import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSession3Component } from './card-session3.component';

describe('CardSession3Component', () => {
  let component: CardSession3Component;
  let fixture: ComponentFixture<CardSession3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSession3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSession3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2LectureComponent } from './session2-lecture.component';

describe('Session2LectureComponent', () => {
  let component: Session2LectureComponent;
  let fixture: ComponentFixture<Session2LectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session2LectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session2LectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

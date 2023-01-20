import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session3LectureComponent } from './session3-lecture.component';

describe('Session3LectureComponent', () => {
  let component: Session3LectureComponent;
  let fixture: ComponentFixture<Session3LectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session3LectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session3LectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

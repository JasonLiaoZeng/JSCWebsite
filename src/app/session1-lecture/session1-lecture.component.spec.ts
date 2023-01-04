import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1LectureComponent } from './session1-lecture.component';

describe('Session1LectureComponent', () => {
  let component: Session1LectureComponent;
  let fixture: ComponentFixture<Session1LectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session1LectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session1LectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

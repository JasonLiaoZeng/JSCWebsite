import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session3StudyMaterialsComponent } from './session3-study-materials.component';

describe('Session3StudyMaterialsComponent', () => {
  let component: Session3StudyMaterialsComponent;
  let fixture: ComponentFixture<Session3StudyMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session3StudyMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session3StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

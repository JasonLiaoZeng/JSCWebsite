import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2StudyMaterialsComponent } from './session2-study-materials.component';

describe('Session2StudyMaterialsComponent', () => {
  let component: Session2StudyMaterialsComponent;
  let fixture: ComponentFixture<Session2StudyMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session2StudyMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session2StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

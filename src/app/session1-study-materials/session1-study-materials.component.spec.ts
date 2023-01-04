import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1StudyMaterialsComponent } from './session1-study-materials.component';

describe('Session1StudyMaterialsComponent', () => {
  let component: Session1StudyMaterialsComponent;
  let fixture: ComponentFixture<Session1StudyMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session1StudyMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session1StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

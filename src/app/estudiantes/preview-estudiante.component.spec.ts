import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEstudianteComponent } from './preview-estudiante.component';

describe('PreviewEstudianteComponent', () => {
  let component: PreviewEstudianteComponent;
  let fixture: ComponentFixture<PreviewEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

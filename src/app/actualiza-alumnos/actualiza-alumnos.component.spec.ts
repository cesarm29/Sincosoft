import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaAlumnosComponent } from './actualiza-alumnos.component';

describe('ActualizaAlumnosComponent', () => {
  let component: ActualizaAlumnosComponent;
  let fixture: ComponentFixture<ActualizaAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

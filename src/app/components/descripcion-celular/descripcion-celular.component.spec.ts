import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCelularComponent } from './descripcion-celular.component';

describe('DescripcionCelularComponent', () => {
  let component: DescripcionCelularComponent;
  let fixture: ComponentFixture<DescripcionCelularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionCelularComponent]
    });
    fixture = TestBed.createComponent(DescripcionCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

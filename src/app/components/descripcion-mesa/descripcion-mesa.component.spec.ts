import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionMesaComponent } from './descripcion-mesa.component';

describe('DescripcionMesaComponent', () => {
  let component: DescripcionMesaComponent;
  let fixture: ComponentFixture<DescripcionMesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionMesaComponent]
    });
    fixture = TestBed.createComponent(DescripcionMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionPortatilComponent } from './descripcion-portatil.component';

describe('DescripcionPortatilComponent', () => {
  let component: DescripcionPortatilComponent;
  let fixture: ComponentFixture<DescripcionPortatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionPortatilComponent]
    });
    fixture = TestBed.createComponent(DescripcionPortatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

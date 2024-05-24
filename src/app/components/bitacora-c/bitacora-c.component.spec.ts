import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraCComponent } from './bitacora-c.component';

describe('BitacoraCComponent', () => {
  let component: BitacoraCComponent;
  let fixture: ComponentFixture<BitacoraCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitacoraCComponent]
    });
    fixture = TestBed.createComponent(BitacoraCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

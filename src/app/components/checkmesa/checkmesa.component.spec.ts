import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmesaComponent } from './checkmesa.component';

describe('CheckmesaComponent', () => {
  let component: CheckmesaComponent;
  let fixture: ComponentFixture<CheckmesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckmesaComponent]
    });
    fixture = TestBed.createComponent(CheckmesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckportatilComponent } from './checkportatil.component';

describe('CheckportatilComponent', () => {
  let component: CheckportatilComponent;
  let fixture: ComponentFixture<CheckportatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckportatilComponent]
    });
    fixture = TestBed.createComponent(CheckportatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

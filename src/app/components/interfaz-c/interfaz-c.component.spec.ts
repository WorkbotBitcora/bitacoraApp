import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazCComponent } from './interfaz-c.component';

describe('InterfazCComponent', () => {
  let component: InterfazCComponent;
  let fixture: ComponentFixture<InterfazCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfazCComponent]
    });
    fixture = TestBed.createComponent(InterfazCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcelularComponent } from './checkcelular.component';

describe('CheckcelularComponent', () => {
  let component: CheckcelularComponent;
  let fixture: ComponentFixture<CheckcelularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckcelularComponent]
    });
    fixture = TestBed.createComponent(CheckcelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroequiposComponent } from './registroequipos.component';

describe('RegistroequiposComponent', () => {
  let component: RegistroequiposComponent;
  let fixture: ComponentFixture<RegistroequiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroequiposComponent]
    });
    fixture = TestBed.createComponent(RegistroequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

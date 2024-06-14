import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPorClienteComponent } from './agenda-por-cliente.component';

describe('AgendaPorClienteComponent', () => {
  let component: AgendaPorClienteComponent;
  let fixture: ComponentFixture<AgendaPorClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaPorClienteComponent]
    });
    fixture = TestBed.createComponent(AgendaPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

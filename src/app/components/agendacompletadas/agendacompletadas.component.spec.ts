import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendacompletadasComponent } from './agendacompletadas.component';

describe('AgendacompletadasComponent', () => {
  let component: AgendacompletadasComponent;
  let fixture: ComponentFixture<AgendacompletadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendacompletadasComponent]
    });
    fixture = TestBed.createComponent(AgendacompletadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

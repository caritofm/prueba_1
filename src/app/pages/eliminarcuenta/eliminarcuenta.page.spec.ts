import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarcuentaPage } from './eliminarcuenta.page';

describe('EliminarcuentaPage', () => {
  let component: EliminarcuentaPage;
  let fixture: ComponentFixture<EliminarcuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuentaeliminadaPage } from './cuentaeliminada.page';

describe('CuentaeliminadaPage', () => {
  let component: CuentaeliminadaPage;
  let fixture: ComponentFixture<CuentaeliminadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaeliminadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

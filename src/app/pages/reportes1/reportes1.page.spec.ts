import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reportes1Page } from './reportes1.page';

describe('Reportes1Page', () => {
  let component: Reportes1Page;
  let fixture: ComponentFixture<Reportes1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Reportes1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

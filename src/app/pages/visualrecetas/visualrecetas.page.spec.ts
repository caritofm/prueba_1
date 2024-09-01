import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualrecetasPage } from './visualrecetas.page';

describe('VisualrecetasPage', () => {
  let component: VisualrecetasPage;
  let fixture: ComponentFixture<VisualrecetasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualrecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccMatTableComponent } from './vacc-mat-table.component';

describe('VaccMatTableComponent', () => {
  let component: VaccMatTableComponent;
  let fixture: ComponentFixture<VaccMatTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VaccMatTableComponent]
    });
    fixture = TestBed.createComponent(VaccMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

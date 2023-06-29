import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccCardComponent } from './vacc-card.component';

describe('VaccCardComponent', () => {
  let component: VaccCardComponent;
  let fixture: ComponentFixture<VaccCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VaccCardComponent]
    });
    fixture = TestBed.createComponent(VaccCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursalComponent } from './disbursal.component';

describe('DisbursalComponent', () => {
  let component: DisbursalComponent;
  let fixture: ComponentFixture<DisbursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisbursalComponent]
    });
    fixture = TestBed.createComponent(DisbursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

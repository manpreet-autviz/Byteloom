import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialApprovalsComponent } from './financial-approvals.component';

describe('FinancialApprovalsComponent', () => {
  let component: FinancialApprovalsComponent;
  let fixture: ComponentFixture<FinancialApprovalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialApprovalsComponent]
    });
    fixture = TestBed.createComponent(FinancialApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

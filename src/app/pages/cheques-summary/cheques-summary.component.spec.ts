import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesSummaryComponent } from './cheques-summary.component';

describe('ChequesSummaryComponent', () => {
  let component: ChequesSummaryComponent;
  let fixture: ComponentFixture<ChequesSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChequesSummaryComponent]
    });
    fixture = TestBed.createComponent(ChequesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

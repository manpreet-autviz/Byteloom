import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionAnalysisComponent } from './rejection-analysis.component';

describe('RejectionAnalysisComponent', () => {
  let component: RejectionAnalysisComponent;
  let fixture: ComponentFixture<RejectionAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectionAnalysisComponent]
    });
    fixture = TestBed.createComponent(RejectionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

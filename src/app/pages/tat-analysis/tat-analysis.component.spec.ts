import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatAnalysisComponent } from './tat-analysis.component';

describe('TatAnalysisComponent', () => {
  let component: TatAnalysisComponent;
  let fixture: ComponentFixture<TatAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatAnalysisComponent]
    });
    fixture = TestBed.createComponent(TatAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


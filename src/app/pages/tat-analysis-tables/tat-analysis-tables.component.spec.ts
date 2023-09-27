import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatAnalysisTablesComponent } from './tat-analysis-tables.component';

describe('TatAnalysisTablesComponent', () => {
  let component: TatAnalysisTablesComponent;
  let fixture: ComponentFixture<TatAnalysisTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatAnalysisTablesComponent]
    });
    fixture = TestBed.createComponent(TatAnalysisTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

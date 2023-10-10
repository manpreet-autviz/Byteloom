import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressTablesComponent } from './work-in-progress-tables.component';

describe('WorkInProgressTablesComponent', () => {
  let component: WorkInProgressTablesComponent;
  let fixture: ComponentFixture<WorkInProgressTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkInProgressTablesComponent]
    });
    fixture = TestBed.createComponent(WorkInProgressTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

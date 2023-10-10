import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSupervisorComponent } from './business-supervisor.component';

describe('BusinessSupervisorComponent', () => {
  let component: BusinessSupervisorComponent;
  let fixture: ComponentFixture<BusinessSupervisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessSupervisorComponent]
    });
    fixture = TestBed.createComponent(BusinessSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

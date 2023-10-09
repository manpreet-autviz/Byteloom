import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRMComponent } from './business-rm.component';

describe('BusinessRMComponent', () => {
  let component: BusinessRMComponent;
  let fixture: ComponentFixture<BusinessRMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRMComponent]
    });
    fixture = TestBed.createComponent(BusinessRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

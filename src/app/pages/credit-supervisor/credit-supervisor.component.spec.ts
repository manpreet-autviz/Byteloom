import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSupervisorComponent } from './credit-supervisor.component';

describe('CreditSupervisorComponent', () => {
  let component: CreditSupervisorComponent;
  let fixture: ComponentFixture<CreditSupervisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditSupervisorComponent]
    });
    fixture = TestBed.createComponent(CreditSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

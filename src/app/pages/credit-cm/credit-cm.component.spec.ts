import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCmComponent } from './credit-cm.component';

describe('CreditCmComponent', () => {
  let component: CreditCmComponent;
  let fixture: ComponentFixture<CreditCmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCmComponent]
    });
    fixture = TestBed.createComponent(CreditCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

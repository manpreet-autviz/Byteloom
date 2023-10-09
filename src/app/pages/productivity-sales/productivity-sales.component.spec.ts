import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitySalesComponent } from './productivity-sales.component';

describe('ProductivitySalesComponent', () => {
  let component: ProductivitySalesComponent;
  let fixture: ComponentFixture<ProductivitySalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductivitySalesComponent]
    });
    fixture = TestBed.createComponent(ProductivitySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

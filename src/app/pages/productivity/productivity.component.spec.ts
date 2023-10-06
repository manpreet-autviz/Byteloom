import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityComponent } from './productivity.component';

describe('ProductivityComponent', () => {
  let component: ProductivityComponent;
  let fixture: ComponentFixture<ProductivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductivityComponent]
    });
    fixture = TestBed.createComponent(ProductivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

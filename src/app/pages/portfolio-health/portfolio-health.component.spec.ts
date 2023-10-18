import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHealthComponent } from './portfolio-health.component';

describe('PortfolioHealthComponent', () => {
  let component: PortfolioHealthComponent;
  let fixture: ComponentFixture<PortfolioHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioHealthComponent]
    });
    fixture = TestBed.createComponent(PortfolioHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

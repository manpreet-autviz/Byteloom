import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatLoginTableComponent } from './tat-login-table.component';

describe('TatLoginTableComponent', () => {
  let component: TatLoginTableComponent;
  let fixture: ComponentFixture<TatLoginTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatLoginTableComponent]
    });
    fixture = TestBed.createComponent(TatLoginTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

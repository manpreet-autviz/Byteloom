import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfTatComponent } from './out-of-tat.component';

describe('OutOfTatComponent', () => {
  let component: OutOfTatComponent;
  let fixture: ComponentFixture<OutOfTatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutOfTatComponent]
    });
    fixture = TestBed.createComponent(OutOfTatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

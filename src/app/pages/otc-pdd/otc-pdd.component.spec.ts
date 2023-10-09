import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcPddComponent } from './otc-pdd.component';

describe('OtcPddComponent', () => {
  let component: OtcPddComponent;
  let fixture: ComponentFixture<OtcPddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtcPddComponent]
    });
    fixture = TestBed.createComponent(OtcPddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

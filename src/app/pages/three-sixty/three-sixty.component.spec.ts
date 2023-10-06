import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSixtyComponent } from './three-sixty.component';

describe('ThreeSixtyComponent', () => {
  let component: ThreeSixtyComponent;
  let fixture: ComponentFixture<ThreeSixtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeSixtyComponent]
    });
    fixture = TestBed.createComponent(ThreeSixtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

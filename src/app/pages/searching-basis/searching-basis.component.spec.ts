import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingBasisComponent } from './searching-basis.component';

describe('SearchingBasisComponent', () => {
  let component: SearchingBasisComponent;
  let fixture: ComponentFixture<SearchingBasisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchingBasisComponent]
    });
    fixture = TestBed.createComponent(SearchingBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

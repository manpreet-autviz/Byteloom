import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPartnersComponent } from './channel-partners.component';

describe('ChannelPartnersComponent', () => {
  let component: ChannelPartnersComponent;
  let fixture: ComponentFixture<ChannelPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelPartnersComponent]
    });
    fixture = TestBed.createComponent(ChannelPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

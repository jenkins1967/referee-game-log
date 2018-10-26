import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkSelectorComponent } from './social-network-selector.component';

describe('SocialNetworkSelectorComponent', () => {
  let component: SocialNetworkSelectorComponent;
  let fixture: ComponentFixture<SocialNetworkSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

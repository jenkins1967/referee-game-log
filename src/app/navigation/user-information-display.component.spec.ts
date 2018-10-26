import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationDisplayComponent } from './user-information-display.component';

describe('UserInformationDisplayComponent', () => {
  let component: UserInformationDisplayComponent;
  let fixture: ComponentFixture<UserInformationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

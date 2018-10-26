import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisconductComponent } from './misconduct.component';

describe('MisconductComponent', () => {
  let component: MisconductComponent;
  let fixture: ComponentFixture<MisconductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisconductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisconductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisconductListComponent } from './misconduct-list.component';

describe('MisconductListComponent', () => {
  let component: MisconductListComponent;
  let fixture: ComponentFixture<MisconductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisconductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisconductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

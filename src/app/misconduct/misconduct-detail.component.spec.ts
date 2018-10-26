import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisconductDetailComponent } from './misconduct-detail.component';

describe('MisconductDetailComponent', () => {
  let component: MisconductDetailComponent;
  let fixture: ComponentFixture<MisconductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisconductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisconductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

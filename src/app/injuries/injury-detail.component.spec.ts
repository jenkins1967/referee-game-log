import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryDetailComponent } from './injury-detail.component';

describe('InjuryDetailComponent', () => {
  let component: InjuryDetailComponent;
  let fixture: ComponentFixture<InjuryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

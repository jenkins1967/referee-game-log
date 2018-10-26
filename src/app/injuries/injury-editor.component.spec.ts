import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryEditorComponent } from './injury-editor.component';

describe('InjuryEditorComponent', () => {
  let component: InjuryEditorComponent;
  let fixture: ComponentFixture<InjuryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

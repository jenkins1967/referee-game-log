import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisconductEditorComponent } from './misconduct-editor.component';

describe('MisconductEditorComponent', () => {
  let component: MisconductEditorComponent;
  let fixture: ComponentFixture<MisconductEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisconductEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisconductEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

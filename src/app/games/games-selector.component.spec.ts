import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSelectorComponent } from './games-selector.component';

describe('GamesSelectorComponent', () => {
  let component: GamesSelectorComponent;
  let fixture: ComponentFixture<GamesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStarRssComponent } from './game-star-rss.component';

describe('GameStarRssComponent', () => {
  let component: GameStarRssComponent;
  let fixture: ComponentFixture<GameStarRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStarRssComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStarRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

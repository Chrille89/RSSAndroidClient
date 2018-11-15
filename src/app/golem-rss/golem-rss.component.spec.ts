import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolemRssComponent } from './golem-rss.component';

describe('GolemRssComponent', () => {
  let component: GolemRssComponent;
  let fixture: ComponentFixture<GolemRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolemRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolemRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

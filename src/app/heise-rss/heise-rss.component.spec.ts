import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeiseRssComponent } from './heise-rss.component';

describe('HeiseRssComponent', () => {
  let component: HeiseRssComponent;
  let fixture: ComponentFixture<HeiseRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeiseRssComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeiseRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

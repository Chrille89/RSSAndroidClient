import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagesschauRssComponent } from './tagesschau-rss.component';

describe('TagesschauRssComponent', () => {
  let component: TagesschauRssComponent;
  let fixture: ComponentFixture<TagesschauRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagesschauRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagesschauRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

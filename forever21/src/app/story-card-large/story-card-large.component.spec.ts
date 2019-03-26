import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCardLargeComponent } from './story-card-large.component';

describe('StoryCardLargeComponent', () => {
  let component: StoryCardLargeComponent;
  let fixture: ComponentFixture<StoryCardLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCardLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

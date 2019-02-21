import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerDarkComponent } from './header-banner-dark.component';

describe('HeaderBannerDarkComponent', () => {
  let component: HeaderBannerDarkComponent;
  let fixture: ComponentFixture<HeaderBannerDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBannerDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBannerDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

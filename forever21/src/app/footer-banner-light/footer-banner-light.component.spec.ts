import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBannerLightComponent } from './footer-banner-light.component';

describe('FooterBannerLightComponent', () => {
  let component: FooterBannerLightComponent;
  let fixture: ComponentFixture<FooterBannerLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBannerLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBannerLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

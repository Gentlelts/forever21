import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {ElModule} from 'element-angular';
import { registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginPage} from './pages/login/login.page';
import {IndexPage} from './pages/index/index.page';
import {Test1Component} from './test1/test1.component';

// if you use webpack, import style
import 'element-angular/theme/index.css';
import {HeaderBannerComponent} from './header-banner/header-banner.component';
import {AboutPage} from './pages/about/about.page';
import {StoryPage} from './pages/story/story.page';
import {HelpPage} from './pages/help/help.page';
import {RegisteredPage} from './pages/registered/registered.page';
import { HeaderBannerDarkComponent } from './header-banner-dark/header-banner-dark.component';
import { FooterBannerComponent } from './footer-banner/footer-banner.component';
import { PersonalCenterPage } from './pages/personal-center/personal-center.page';
import { FooterBannerLightComponent } from './footer-banner-light/footer-banner-light.component';
import { ReleaseStoryPage } from './pages/release-story/release-story.page';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StoryDetailPage } from './pages/story-detail/story-detail.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    IndexPage,
    Test1Component,
    HeaderBannerComponent,
    AboutPage,
    StoryPage,
    HelpPage,
    RegisteredPage,
    HeaderBannerDarkComponent,
    FooterBannerComponent,
    PersonalCenterPage,
    FooterBannerLightComponent,
    ReleaseStoryPage,
    FileUploadComponent,
    StoryDetailPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    ElModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

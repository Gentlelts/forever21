import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import {ElModule} from 'element-angular';

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
import {RegisteredPage} from './pages/registered/registered.page'

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ElModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElModule } from 'element-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { IndexPage } from './pages/index/index.page';
import { Test1Component } from './test1/test1.component';

// if you use webpack, import style
import 'element-angular/theme/index.css';
import { HeaderBannerComponent } from './header-banner/header-banner.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    IndexPage,
    Test1Component,
    HeaderBannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

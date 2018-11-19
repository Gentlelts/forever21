import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { IndexPage } from './pages/index/index.page';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    IndexPage,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { IndexPage } from './pages/index/index.page';

const routes: Routes = [
    { path: '', component: IndexPage },
    { path: 'login', component: LoginPage },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

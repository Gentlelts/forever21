import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-banner-dark',
  templateUrl: './header-banner-dark.component.html',
  styleUrls: ['./header-banner-dark.component.scss']
})
export class HeaderBannerDarkComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }
  LoginOut() {
    window.localStorage.removeItem('UserID');
    window.localStorage.removeItem('UserName');
    this.router.navigate(['/']);
    this.hasLogin = true;
  }
  hasLogin = false;
  ngOnInit() {
    let UserID = window.localStorage.getItem('UserID');
    this.hasLogin = UserID != null;
  }

}

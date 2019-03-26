import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  hasLogin = false;
  LoginOut() {
    window.localStorage.removeItem('UserID');
    window.localStorage.removeItem('UserName');
    this.router.navigate(['/']);
    this.hasLogin = true;
  }
  ngOnInit() {
    let UserID = window.localStorage.getItem('UserID');
    this.hasLogin = UserID != null;
    console.log(this.hasLogin);
  }

}

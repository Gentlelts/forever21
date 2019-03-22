import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  templateUrl: './personal-center.page.html',

  styleUrls: ['./personal-center.page.scss']
})
export class PersonalCenterPage implements OnInit {
  userName = '';
  constructor(
    private router: Router
  ) {
    this.userName = window.localStorage.getItem('UserName');
  }
  releaseStory(){
    this.router.navigate(['/releaseStory']);
  }
  ngOnInit() {
  }
}

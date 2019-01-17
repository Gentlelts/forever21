import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './login.page.html',
  
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor() { }
  userName = '';
  passWord = '';
  LoginIn(){
    let data = {
      userName:this.userName,
      passWord:this.passWord
    };
    console.log(data)
  }
  ngOnInit() {
  }
}

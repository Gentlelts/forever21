import { Component, OnInit } from '@angular/core';
import { foreverHttp } from '../../../environments/axiosHttp';
declare var JSEncrypt: any;

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {
  constructor() {}
  userName = '';
  passWord = '';
  LoginIn(){//登录
    let data = {
      UserName: this.userName,
      PassWord: this.passWord
    };
    foreverHttp.get('/loginRegister/encrypt', {}, (response: any) => {
      let publicPem = response.data;
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicPem);
      data.PassWord = encrypt.encrypt(data.PassWord);
      foreverHttp.post('/loginRegister/login', data, (response: any) => {
        console.log(response)
      })
    })
  }
  ngOnInit() {
  }
}

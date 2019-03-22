import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {foreverHttp} from '../../../environments/axiosHttp';
import {ElMessageService} from 'element-angular';

declare var JSEncrypt: any;

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {
  constructor(
    private message: ElMessageService,
    private router: Router
  ) {
  }

  userName = '';
  passWord = '';

  LoginIn() {// 登录
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
        if (!response) return;
        if (response.code === 200) {
          this.showMsg('success', '登陆成功');
          window.localStorage.setItem('UserID', response.data.UserID);
          window.localStorage.setItem('UserName', this.userName);
          this.router.navigate(['/']);
        } else {
          this.showMsg('warning', response.msg);
        }
      });
    });
  }

  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }

  ngOnInit() {
  }
}

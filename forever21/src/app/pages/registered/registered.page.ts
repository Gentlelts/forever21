import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {foreverHttp} from '../../../environments/axiosHttp';
import {ElMessageService} from 'element-angular';

declare var JSEncrypt: any;

@Component({
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss']
})

export class RegisteredPage implements OnInit {
  constructor(
    private router: Router,
    private message: ElMessageService
  ) {
  }

  userName = '';
  passWord = '';
  passWordConfirm = '';
  code = '';
  regBlur(e){
    if(e === 'userName'){
      if(this.userName.length <= 0 || this.userName.length > 8){
        this.showMsg('warning', '请注意昵称长度');
      }
    }
    if(e === 'passWord'){
      if(this.passWord.length <= 0 || this.passWord.length > 20){
        this.showMsg('warning', '请注意密码长度');
        return;
      }
    }
    if(e === 'passWordConfirm'){
      if(this.passWord !== this.passWordConfirm){
        this.showMsg('warning', '两次输入的密码不一致');
        return;
      }
    }
    if(e === 'code'){
      if(this.code.length !== 4){
        this.showMsg('warning', '请注意验证码长度');
        return;
      }
    }
  }
  // 注册
  Registered() {
    if(this.userName.length <= 0 || this.userName.length > 8){
      this.showMsg('warning', '请注意昵称长度');
    }
    if(this.passWord.length <= 0 || this.passWord.length > 20){
      this.showMsg('warning', '请注意密码长度');
      return;
    }
    if(this.passWord !== this.passWordConfirm){
      this.showMsg('warning', '两次输入的密码不一致');
      return;
    }
    if(this.code.length !== 4){
      this.showMsg('warning', '请注意验证码长度');
      return;
    }
    let data = {
      UserName: this.userName,
      PassWord: this.passWord,
      code: this.code,
    };
    foreverHttp.get('/loginRegister/encrypt', {}, (response: any) => {// 这里拦截器已拦截，成功才会执行
      let publicPem = response.data;
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicPem);
      data.PassWord = encrypt.encrypt(data.PassWord);
      foreverHttp.post('/loginRegister/register', data, (response: any) => {
        if (!response) { return; }
        if (response.code === 200) {
          this.showMsg('success', '注册成功');
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

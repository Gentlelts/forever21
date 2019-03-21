import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { foreverHttp } from '../../../environments/axiosHttp';
declare var JSEncrypt: any;

@Component({
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss']
})

export class RegisteredPage implements OnInit {
  constructor(private router: Router) {}
  userName = '';
  passWord = '';
  Registered() {//注册
    let data = {
      UserName: this.userName,
      PassWord: this.passWord
    };
    foreverHttp.get('/loginRegister/encrypt', {}, (response: any) => {//这里拦截器已拦截，成功才会执行
      let publicPem = response.data;
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicPem);
      data.PassWord = encrypt.encrypt(data.PassWord);
      foreverHttp.post('/loginRegister/login', data, (response: any) => {
        console.log(response)
        this.router.navigate(['/about']);
      })
    })
  }
  ngOnInit() {
  }
}

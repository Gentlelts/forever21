import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from 'axios';
// import {environment} from '../../../environments/environment';
declare var JSEncrypt:any;

@Component({
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss']
})
export class RegisteredPage implements OnInit {
  constructor(
    public http: HttpClient,
  ) {
  }
  
  // httpUrl = `${environment.url}`;
  userName = '';
  passWord = '';
  
  //注册
  Registered() {
    let data = {
      UserName: this.userName,
      PassWord: this.passWord
    };
    axios({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      url: '/loginRegister/encrypt',
    }).then((response) => {
      let publicPem = response.data.data;
      console.log(publicPem);
      let encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicPem);
      data.PassWord = encrypt.encrypt(data.PassWord);
      axios({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        url: '/loginRegister/register',
        data: data,
        transformRequest: [function(data) {
          let ret = '';
          for(let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then((response) => {
        console.log(response);
        if(response.data.code == 200){
          alert("注册成功！请牢记登录账号和密码");
        }
      })
    })
  }
  
  ngOnInit() {
  }
}

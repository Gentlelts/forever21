import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import axios from "axios";
declare var JSEncrypt:any;
@Component({
  templateUrl: './login.page.html',
  
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  userName = '';
  passWord = '';
  LoginIn(){
    let data = {
      UserName:this.userName,
      PassWord:this.passWord
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
        url: '/loginRegister/login',
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
          alert("登录成功！");
          let UserID = response.data.data.UserID;
          window.localStorage.setItem('UserID',UserID);
          window.localStorage.setItem('UserName',this.userName);
          window.localStorage.setItem('PassWord',this.passWord);
        }
        if(response.data.code == 402){
          alert(response.data.msg);
        }
      })
    })
  }
  ngOnInit() {
  }
}

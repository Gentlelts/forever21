import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import axios from 'axios';
import {environment} from '../../../environments/environment';

@Component({
  templateUrl: './registered.page.html',
  styleUrls: ['./registered.page.scss']
})
export class RegisteredPage implements OnInit {
  constructor(
    public http: HttpClient,
  ) {
  }
  
  httpUrl = `${environment.url}`;
  userName = '';
  passWord = '';
  
  Registered() {
    let data = {
      userName: this.userName,
      passWord: this.passWord
    };
    // axios.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded ' //自定义headers
    // };
    console.log(data);
    console.log(this.httpUrl);
    // axios.post(this.httpUrl + '/loginRegister/register', data)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    
    
    // axios({
    //   headers : {
    //     'Content-Type': 'application/x-www-form-urlencoded ' //自定义headers
    //   },
    //   method: 'post',
    //   url: '/loginRegister/register',
    //   data: data
    // });
  
  
    axios({
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded ' //自定义headers
      },
      method: 'post',
      url: '/loginRegister/register',
      data: data,
      transformRequest: [function(data) {
        console.log(data);
        let ret = '';
        for(let it in data) {
          ret += encodeURIComponent(data[it]) + '=' + encodeURIComponent(data) + '&'
        }
        return ret
      }],
    }).then((response) => {
      console.log(response);
      console.log(response);
    })
  
  
  
  }
  
  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './registered.page.html',
  
  styleUrls: ['./registered.page.scss']
})
export class RegisteredPage implements OnInit {
  constructor() { }
  userName = '';
  passWord = '';
  ngOnInit() {
  }
  Registered() {
    let data = {
      userName:this.userName,
      passWord:this.passWord
    };
    console.log(data)
    
  }
}

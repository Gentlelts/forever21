import { Component, OnInit } from '@angular/core';
@Component({
  templateUrl: './index.page.html',
  
  styleUrls: ['./index.page.scss']
})
export class IndexPage implements OnInit {
  constructor() { }
  ngOnInit11(){
    console.log(11111)
  }
  ngOnInit() {
    let a = 1;
    console.log(a)
  }
}

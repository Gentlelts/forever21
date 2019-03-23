import { Component, OnInit } from '@angular/core';
import {foreverHttp} from '../../../environments/axiosHttp';

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})

export class IndexPage implements OnInit {
  likeThis = false;
  constructor() {}
  getStoryList(){
    foreverHttp.get('/article/list',{},(response:any) =>{
      if (response.code === 200) {
        console.log(response.data);
      }
    });
  }
  likeStory(){

  }
  ngOnInit() {
    this.getStoryList();
  }
}

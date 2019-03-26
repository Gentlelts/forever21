import { Component, OnInit } from '@angular/core';
import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from '../../../environments/environment';
@Component({
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss']
})
export class StoryPage implements OnInit {
  public apiUrl= `${environment.url}`;
  storyList = [];
  constructor() { }

  getStoryList(){
    foreverHttp.get('/article/list',{},(response:any) =>{
      if (response.code === 200) {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i].DocUrl = response.data[i].DocUrl.split(',');
          response.data[i].DocUrl = response.data[i].DocUrl[0];
        }
        // 反转数据获取到最新的时间
        this.storyList = response.data;
        this.storyList = this.storyList.reverse();
      }
    });
  }
  ngOnInit() {
    this.getStoryList();
  }
}

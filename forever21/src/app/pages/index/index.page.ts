import { Component, OnInit } from '@angular/core';
import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from "../../../environments/environment";

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})

export class IndexPage implements OnInit {
  public apiUrl= `${environment.url}`;
  likeThis = false;
  latestWorks = [];// 最新作品
  rankingList = [];// 榜单作品Time
  constructor() {}
  // 对数据根据点赞数排序
  static sortLikeArray(likeArray){
    return likeArray.sort(function(a,b) {
      return b-a;
    });
  }
  getStoryList(){
    foreverHttp.get('/article/list',{},(response:any) =>{
      if (response.code === 200) {
        console.log(response.data);
        this.latestWorks = response.data;
        this.rankingList = response.data;
        for (let i = 0; i < this.latestWorks.length; i++) {
          this.latestWorks[i].DocUrl = this.latestWorks[i].DocUrl.split(',');
          this.latestWorks[i].DocUrl = this.latestWorks[i].DocUrl[0];
        }
        // 反转数据获取到最新的时间
        this.latestWorks = this.latestWorks.reverse().slice(0,4);
        // 对数据根据点赞数排序
        this.rankingList = IndexPage.sortLikeArray(this.rankingList).slice(0,3);
        console.log(this.rankingList);
      }
    });
  }
  likeStory(){
    foreverHttp.post('/article/like',{},(response:any) =>{
      if (response.code === 200) {
        console.log(response.data);
      }
    });
  }
  ngOnInit() {
    this.getStoryList();
  }
}

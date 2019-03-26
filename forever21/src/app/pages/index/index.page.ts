import { Component, OnInit } from '@angular/core';
import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from "../../../environments/environment";

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})

export class IndexPage implements OnInit {
  public apiUrl= `${environment.url}`;
  latestWorks = [];// 最新作品
  rankingList = [];// 榜单作品Time
  constructor() {}
  // 对数据根据点赞数排序
  static sortLikeArray(likeArray){
    return likeArray.sort(function(a,b) {
      return b.Like-a.Like;
    });
  }
  getStoryList(){
    foreverHttp.get('/article/list',{},(response:any) =>{
      if (response.code === 200) {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i].DocUrl = response.data[i].DocUrl.split(',');
          response.data[i].DocUrl = response.data[i].DocUrl[0];
        }
        // 反转数据获取到最新的时间
        this.latestWorks = response.data;
        this.latestWorks = this.latestWorks.reverse().slice(0,4);
        // 对数据根据点赞数排序
        this.sortArry(response.data);
      }
    });
  }
  sortArry(data){
    this.rankingList = data;
    this.rankingList = IndexPage.sortLikeArray(this.rankingList).slice(0,3);
  }
  ngOnInit() {
    this.getStoryList();
  }
}

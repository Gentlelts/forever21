import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ElMessageService} from 'element-angular';

import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from "../../../environments/environment";

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})

export class IndexPage implements OnInit {
  public apiUrl= `${environment.url}`;
  imgLists = [
    {
      src:'https://forever21-1253218036.cos.ap-shanghai.myqcloud.com/template/bg1.png'
    },
    {
      src:'https://forever21-1253218036.cos.ap-shanghai.myqcloud.com/template/bg2.png'
    },
    {
      src:'https://forever21-1253218036.cos.ap-shanghai.myqcloud.com/template/stars.png'
    },
  ];// 最新作品
  latestWorks = [];// 最新作品
  rankingList = [];// 榜单作品Time
  Landscape = "Landscape";
  Character = "Character";
  Story = "Story";
  keyword = '';
  constructor(
    private message: ElMessageService,
    private router: Router
  ) {}
  // 对数据根据点赞数排序
  static sortLikeArray(likeArray){
    return likeArray.sort(function(a,b) {
      return b.Like-a.Like;
    });
  }
  searchKeyword(){
    if(this.keyword === ''){
      this.showMsg('warning', '关键字不能为空~');
    }else{
      this.router.navigate(['/experience'],{ queryParams: { id: this.keyword } });
    }
  }
  getStoryList(){
    let data = {
      tags:''
    };
    foreverHttp.get('/article/list',data,(response:any) =>{
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

  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }
}

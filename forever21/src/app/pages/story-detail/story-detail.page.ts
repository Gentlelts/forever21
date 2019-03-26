import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';
import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from '../../../environments/environment';
import {ElMessageService} from 'element-angular';
@Component({
  templateUrl: './story-detail.page.html',
  styleUrls: ['./story-detail.page.scss']
})
export class StoryDetailPage implements OnInit {
  public apiUrl= `${environment.url}`;
  storyInfo:any = {};
  likeThis = false;
  constructor(
    private route: ActivatedRoute,
    private message: ElMessageService,
    // private location: Location
    ) { }
  // goBack() {
  //   this.location.back();
  // }
  getStoryDetail(): void {
    let id = '';
    this.route.paramMap.subscribe((params: ParamMap)=>{
      id = params.get('id');
    });
    let data = {
      id:id
    };
    foreverHttp.post('/article/details',data,(res:any) =>{
      if(res.code === 200){
        this.storyInfo = res.data;
        this.storyInfo.DocUrl = this.storyInfo.DocUrl.split(',');
      }
    });
  }
  likeStory(info){
    let data = {
      ArticleID:info.ArticleID,
      id:''
    };
    this.route.paramMap.subscribe((params: ParamMap)=>{
      data.id = params.get('id');
    });
    foreverHttp.post('/article/like',data,(response:any) =>{
      if (response.code === 200) {
        console.log(response.data);
        this.likeThis = true;
        this.storyInfo.Like = this.storyInfo.Like + 1;
        this.showMsg('success','点赞成功~');
      }
    });
  }
  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }
  ngOnInit() {
    this.getStoryDetail();
  }
}

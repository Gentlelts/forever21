import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';
import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from '../../../environments/environment';
@Component({
  templateUrl: './story-detail.page.html',
  styleUrls: ['./story-detail.page.scss']
})
export class StoryDetailPage implements OnInit {
  public apiUrl= `${environment.url}`;
  storyInfo:any = {};
  constructor(
    private route: ActivatedRoute,
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
  ngOnInit() {
    this.getStoryDetail();
  }
}

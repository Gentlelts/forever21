import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {foreverHttp} from '../../../environments/axiosHttp';

@Component({
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss']
})
export class ExperiencePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    ) { }
  public keyword: any;
  public storyList: any=[];
  
  getKeyword() {
    this.route.queryParams.subscribe(params => {
    this.keyword = params['id'];
    console.log(this.keyword)
    })
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

        for(let j = 0; j < response.data.length; j++){
          let ArticleName =  response.data[j].ArticleName;
          let Content =  response.data[j].Content;
          let Title =  response.data[j].Title;
          if(ArticleName.indexOf(this.keyword) !== -1 || Content.indexOf(this.keyword) !== -1 || Title.indexOf(this.keyword) !== -1){
            this.storyList.push(response.data[j]);
          }
        }
// ArticleName
// Content
// Title

// ctrl.userLists = ctrl.userLists.filter(function (v,i) {
//   console.log(v);
//   return v.name.indexOf(ctrl.searchVal) > -1
// })
        // this.storyList = response.data.filter(function (v,i){
        //   console.log(v);
        //   return v.name.indexOf(this.keyword) > -1
        // });
        this.storyList = this.storyList.reverse()
        console.log(this.storyList)
      }
    });
  }
  ngOnInit() {
    this.getKeyword();
    this.getStoryList();
  }
}

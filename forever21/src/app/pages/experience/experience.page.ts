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
  public storyList: any;
  
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
        this.storyList = response.data;
        console.log(this.storyList)
      }
    });
  }
  ngOnInit() {
    this.getKeyword();
    this.getStoryList();
  }
}

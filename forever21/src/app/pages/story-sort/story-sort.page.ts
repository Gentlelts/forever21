import {Component, OnInit} from '@angular/core';
import {foreverHttp} from '../../../environments/axiosHttp';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  templateUrl: './story-sort.page.html',
  styleUrls: ['./story-sort.page.scss']
})
export class StorySortPage implements OnInit {
  storySortList = [];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  getStorySortList() {
    let id = '';
    this.route.paramMap.subscribe((params: ParamMap) => {
      id = params.get('id');
    });
    let data = {
      tag: id
    };
    foreverHttp.get('/article/tagList', data, (response: any) => {
      if (response.code === 200) {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i].DocUrl = response.data[i].DocUrl.split(',');
          response.data[i].DocUrl = response.data[i].DocUrl[0];
        }
        // 反转数据获取到最新的时间
        this.storySortList = response.data;
        this.storySortList = this.storySortList.reverse();
      }
    });
  }

  ngOnInit() {
    this.getStorySortList();
  }
}

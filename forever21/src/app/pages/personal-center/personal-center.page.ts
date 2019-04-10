import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {foreverHttp} from '../../../environments/axiosHttp';

@Component({
  templateUrl: './personal-center.page.html',
  styleUrls: ['./personal-center.page.scss']
})
export class PersonalCenterPage implements OnInit {
  userName = '';
  showArticleList = false;// 显示故事列表与上传故事
  hiddenArticleList = false;// 显示上传故事
  ownerArticleList: any = [];// 个人中心作品列表
  likeArticleList: any = [];// 个人中心点赞作品列表
  emptyWords = '暂时还没有作品被点赞噢~';
  userInfo:any = {};
  editInfo = false;// 显示修改信息框
  nzOptions  = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }
          ]
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];
  date = null; // new Date();
  constructor(
    private router: Router
  ) {
    this.userName = window.localStorage.getItem('UserName');
    this.getUserArticle();
  }
  // 获取用户信息
  getUserInfo() {
    let data = {
      UserID: window.localStorage.getItem('UserID')
    };
    foreverHttp.post('/userInfo/information', data, (res: any) => {
      if (res.code === 200) {
        this.userInfo = res.data;
        console.log(this.userInfo.Birthday);
      }
    });
  }

  // 获取用户故事列表
  getUserArticle() {
    let data = {
      UserID: window.localStorage.getItem('UserID')
    };
    foreverHttp.post('/userInfo/userArticle', data, (response: any) => {
      if (response.code === 200) {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i].DocUrl = response.data[i].DocUrl.split(',');
          response.data[i].DocUrl = response.data[i].DocUrl[0];
        }
        this.ownerArticleList = response.data;
        this.likeArticleList = [];
        for (let j = 0; j < this.ownerArticleList.length; j++) {
          if (this.ownerArticleList[j].Like > 0) {
            this.likeArticleList.push(this.ownerArticleList[j]);
          }
        }
        if (response.data.length > 0) {
          this.showArticleList = true;
        } else {
          this.hiddenArticleList = true;
        }
      }
    });
  }

  releaseStory() {
    this.router.navigate(['/releaseStory']);
  }
  // 修改个人资料
  editUserInfo(){
    this.editInfo = true;
  }

  // 修改地址
  onChanges(values: any) {
    console.log(values);
  }
  // 修改日期
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  ngOnInit() {
    this.getUserInfo();
  }
}

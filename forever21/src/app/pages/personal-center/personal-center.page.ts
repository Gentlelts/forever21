import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {foreverHttp} from '../../../environments/axiosHttp';
import {environment} from '../../../environments/environment';

@Component({
  templateUrl: './personal-center.page.html',
  styleUrls: ['./personal-center.page.scss']
})
export class PersonalCenterPage implements OnInit {
  public apiUrl = `${environment.url}`;
  userName = '';
  showArticleList = false;// 显示故事列表与上传故事
  hiddenArticleList = false;// 显示上传故事
  ownerArticleList: any = [];
  emptyWords = '暂时还没有点赞噢~快去上传作品吧~';

  constructor(
    private router: Router
  ) {
    this.userName = window.localStorage.getItem('UserName');
    PersonalCenterPage.getUserInfo();
    this.getUserArticle();
  }

  // 获取用户信息
  static getUserInfo() {
    let data = {
      UserID: window.localStorage.getItem('UserID')
    };
    foreverHttp.post('/userInfo/information', data, (res: any) => {
      if (res.code === 200) {
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
        console.log(this.ownerArticleList);
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

  ngOnInit() {
  }
}

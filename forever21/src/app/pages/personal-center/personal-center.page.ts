import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {foreverHttp} from '../../../environments/axiosHttp';
import {format} from 'date-fns';
import {ElMessageService} from '../../../../node_modules/element-angular';

@Component({
  templateUrl: './personal-center.page.html',
  styleUrls: ['./personal-center.page.scss']
})
export class PersonalCenterPage implements OnInit {
  showArticleList = false;// 显示故事列表与上传故事
  hiddenArticleList = false;// 显示上传故事
  ownerArticleList: any = [];// 个人中心作品列表
  likeArticleList: any = [];// 个人中心点赞作品列表
  emptyWords = '暂时还没有作品被点赞噢~';
  userInfo: any = {};
  SignatureCopy = '一句话描述自己吧~';// 个性签名
  editInfo = false;// 显示修改信息框
  nzOptions = [
    {
      value: '浙江',
      label: '浙江',
      children: [
        {
          value: '杭州',
          label: '杭州',
          children: [
            {
              value: '西湖',
              label: '西湖',
              isLeaf: true
            }
          ]
        },
        {
          value: '宁波',
          label: '宁波',
          isLeaf: true
        }
      ]
    },
    {
      value: '江苏',
      label: '江苏',
      children: [
        {
          value: '南京',
          label: '南京',
          children: [
            {
              value: '中华门',
              label: '中华门',
              isLeaf: true
            }
          ]
        }
      ]
    },
    {
      value: '上海',
      label: '上海',
      children: [
        {
          value: '黄浦区',
          label: '黄浦区',
          children: [
            {
              value: '南京东路',
              label: '南京东路',
              isLeaf: true
            },
            {
              value: '河南中路',
              label: '河南中路',
              isLeaf: true
            },
          ]
        },
        {
          value: '静安区',
          label: '静安区',
          children: [
            {
              value: '万航渡路',
              label: '万航渡路',
              isLeaf: true
            },
            {
              value: '静安路',
              label: '静安路',
              isLeaf: true
            },
          ]
        },
        {
          value: '闵行区',
          label: '闵行区',
          children: [
            {
              value: '沪松公路',
              label: '沪松公路',
              isLeaf: true
            },
            {
              value: '七莘路',
              label: '七莘路',
              isLeaf: true
            },
          ]
        },
      ]
    }
  ];
  constructor(
    private message: ElMessageService,
    private router: Router
  ) {
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
        this.SignatureCopy = this.userInfo.Signature;
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
  editUserInfo() {
    this.editInfo = true;
  }

  // 修改地址
  onChanges(values: any) {
    // console.log(values);
  }

  // 修改日期
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  saveUserInfo() {
    if (this.userInfo.Birthday !== undefined) {
      this.userInfo.Birthday = format(new Date(this.userInfo.Birthday), 'YYYY-MM-DD');
    }
    this.userInfo.Signature = this.SignatureCopy;
    foreverHttp.post('/userInfo/updateInformation', this.userInfo, (res: any) => {
      if (res.code === 200) {
        this.showMsg('success', res.data);
        this.editInfo = false;
      }
    });
  }


  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }

  ngOnInit() {
    this.getUserInfo();
  }
}

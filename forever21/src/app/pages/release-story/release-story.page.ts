import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ElMessageService} from "element-angular";
import {UploadFile} from "ng-zorro-antd";
import {foreverHttp} from "../../../environments/axiosHttp";
@Component({
  templateUrl: './release-story.page.html',
  styleUrls: ['./release-story.page.scss']
})
export class ReleaseStoryPage implements OnInit {
  previewImage: string | undefined = '';
  previewVisible = false;
  releaseTitle = '';
  releaseContent = '';
  constructor(
    private message: ElMessageService
  ) { }

  // 上传文件开始
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [];
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  // 上传文件结束

  // 发布作品
  publishStory(){
    console.log(this.fileList);
    // console.log(this.fileList.toString());
    if(this.releaseTitle.length <= 10 || this.releaseTitle.length >= 30){
      this.showMsg('warning','请注意故事标题字数~');
      return false;
    }
    if(this.releaseContent.length <= 30 || this.releaseTitle.length >= 800){
      this.showMsg('warning','请注意故事内容字数~');
      return false;
    }
    if(this.fileList.length === 0){
      this.showMsg('warning','故事图片不能为空~');
      return false;
    }
    let data = {
      Title: this.releaseTitle,
      Content: this.releaseContent,
    };
    // foreverHttp.post('/article/publish')
  }

  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }
  ngOnInit() {
  }
}

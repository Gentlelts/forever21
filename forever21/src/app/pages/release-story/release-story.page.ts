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
  storyTags: any = [
    {
      id:1,
      name: "故事",
      tag: "Story",
      choose:false
    },
    {
      id:2,
      name: "人物",
      tag: "Character",
      choose:false
    },
    {
      id:3,
      name: "风景",
      tag: "Landscape",
      choose:false
    }
  ];
  storyTagList = [];
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

  chooseSort(e){
    console.log(e)
    e.choose = !e.choose;
    this.storyTagList = [];
    for (let i = 0; i < this.storyTags.length; i++) {
      if(this.storyTags[i].choose){
        this.storyTagList.push(this.storyTags[i].tag);
      }
    }
  }

  // 上传文件结束

  // 发布作品
  publishStory(){
    if(this.releaseTitle.length <= 10 || this.releaseTitle.length >= 50){
      this.showMsg('warning','请注意故事标题字数~');
      return false;
    }
    if(this.releaseContent.length <= 30 || this.releaseTitle.length >= 1200){
      this.showMsg('warning','请注意故事内容字数~');
      return false;
    }
    if(this.fileList.length === 0){
      this.showMsg('warning','故事图片不能为空~');
      return false;
    }
    let DocUrl = [];
    for (let i = 0; i < this.fileList.length; i++) {
      DocUrl.push(this.fileList[i].response.data.fileUrl);
    }
    let data = {
      ArticleID:window.localStorage.getItem('UserID'),
      ArticleName:window.localStorage.getItem('UserName'),
      tag:this.storyTagList.toString(),
      Title: this.releaseTitle,
      Content: this.releaseContent,
      DocUrl:DocUrl.toString()
    };
    foreverHttp.post('/article/publish',data,(response: any) =>{
      if(response.code === 200){
        this.showMsg('success','发布成功~');
        this.fileList = [];
        this.releaseTitle = '';
        this.releaseContent = '';
        DocUrl = [];
      }
    });
  }

  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }
  ngOnInit() {
  }
}

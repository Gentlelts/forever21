import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ElMessageService} from "element-angular";
@Component({
  templateUrl: './release-story.page.html',
  
  styleUrls: ['./release-story.page.scss']
})
export class ReleaseStoryPage implements OnInit {
  constructor(
    private message: ElMessageService
  ) { }
  previewHandle(file: any): void {
    console.log(file);
  }

  errorHandle(err: any): void {
    console.error(err);
    this.showMsg('warning', err.msg);
  }

  showMsg(type: any, msg: String) {
    this.message.setOptions({showClose: true});
    this.message[type](msg);
  }
  ngOnInit() {
  }
}

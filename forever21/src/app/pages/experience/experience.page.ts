import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss']
})
export class ExperiencePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    ) { }
  public keyword: any;
  
  getKeyword() {
    this.route.queryParams.subscribe(params => {
    this.keyword = params['id'];
    console.log(this.keyword)
    })
  }
  ngOnInit() {
    this.getKeyword();
  }
}

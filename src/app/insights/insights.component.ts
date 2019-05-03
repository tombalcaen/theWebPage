import { Component, OnInit } from '@angular/core';
import { InsightsService } from '../service/insights.service';

import * as moment from 'moment/moment';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  constructor(private _insights: InsightsService) { }

  insights = []

  ngOnInit() {
    this._insights.getArticles().subscribe(insights=>{
      console.log(insights)  
      insights.map(ins=>{
        this.insights.push({
          "name": ins.name,
          "contributor": ins.contributor,
          "dateCreated": moment(+ins.dateCreated).format("D MMMM YYYY"),
          "files": ins.files,
          "tags": ins.tags
        })
      })    
      // this.insights = insights;      
    })
  }

}

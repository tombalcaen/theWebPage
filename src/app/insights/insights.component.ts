import { Component, OnInit } from '@angular/core';
import { InsightsService } from '../service/insights.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  constructor(private _insights: InsightsService) { }

  insights = ['test','test2','test3']

  ngOnInit() {
    this._insights.getArticles().subscribe(insights=>{
      console.log(insights)
    })
  }

}

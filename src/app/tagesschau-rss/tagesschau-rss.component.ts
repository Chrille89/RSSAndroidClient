import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tagesschau-rss',
  templateUrl: './tagesschau-rss.component.html',
  styleUrls: ['./tagesschau-rss.component.scss']
})
export class TagesschauRssComponent implements OnInit {
  rssFeeds: any[];

  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.dataService.getTagesschauNews().subscribe((data : any[]) => {
      this.rssFeeds = data;
      console.log("Get data: "+this.rssFeeds);
    });
  }


}

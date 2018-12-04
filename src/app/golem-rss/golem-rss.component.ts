import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-golem-rss',
  templateUrl: './golem-rss.component.html',
  styleUrls: ['./golem-rss.component.scss']
})
export class GolemRssComponent implements OnInit {

  rssFeeds: any[];

  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.rssFeeds = this.dataService.getGolemNews();
  }

}

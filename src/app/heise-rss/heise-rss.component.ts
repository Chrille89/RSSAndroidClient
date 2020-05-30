import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-heise-rss',
  templateUrl: './heise-rss.component.html',
  styleUrls: ['./heise-rss.component.scss'],
})
export class HeiseRssComponent implements OnInit {
  rssFeeds: any[];

  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.dataService.getHeiseNews()
    .subscribe((data: any[]) => {
        this.rssFeeds = data;
    });
  }
}

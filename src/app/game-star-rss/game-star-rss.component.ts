import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-star-rss',
  templateUrl: './game-star-rss.component.html',
  styleUrls: ['./game-star-rss.component.scss']
})
export class GameStarRssComponent implements OnInit {
  rssFeeds: any[];

  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.dataService.getGameStarNews()
    .subscribe((data: any[]) => {
        this.rssFeeds = data;
    });
  }
}

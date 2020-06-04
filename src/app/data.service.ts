import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint : string = "http://h2857701.stratoserver.net:8080/rssServer";
  //private endpoint : string = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

  getGolemNews() {
    console.log("Start Request")
    return this.httpClient.get(this.endpoint+"/golem");
  }

  getTagesschauNews() {
    console.log("Start Request");
    return this.httpClient.get(this.endpoint+"/tagesschau");
  }

  getHeiseNews() {
    console.log("Start Request");
    return this.httpClient.get(this.endpoint+"/heise");
  }

  getGameStarNews() {
    console.log("Start Request");
    return this.httpClient.get(this.endpoint+"/gamestar");
  }
}

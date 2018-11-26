import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  getGolemNews() {
    console.log("Start Request")
    return this.httpClient.get("http://127.0.0.1:8080/golemnews");
  }

  getTagesschauNews() {
    console.log("Start Request")
    return this.httpClient.get("http://127.0.0.1:8080/tagesschaunews");
  }


}

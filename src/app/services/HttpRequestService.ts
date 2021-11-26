import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Injectable, NgModule} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class HttpRequestService {
  constructor(private http: HttpClient) {
  }

  public getResponse() {
    const wpgTransitUrl = "https://api.winnipegtransit.com/v3/variants/16-1-K/destinations.json?api-key=OrN9z8x8KwWXb5o39hoD";
    this.http.get(wpgTransitUrl).subscribe(resp => {
      console.log(resp);
    })
  }
}

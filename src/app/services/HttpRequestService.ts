import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {getUrl, Request} from "./Request";

@Injectable({ providedIn: 'root' })
export class HttpRequestService {

  constructor(private http: HttpClient) {
  }

  public getResponse(request: Request) {
    this.http.get(getUrl(request)).subscribe(resp => {
      console.log(resp);
    })
  }
}

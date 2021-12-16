import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {getUrl, Request} from "./request";
import {createResponse, Response} from "./response";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class HttpRequestService {

    constructor(private http: HttpClient) {
    }

    public getResponse(request: Request): Observable<Response> {
        return this.http.get(getUrl(request)).pipe(map(responseData => {
            if (responseData["query-time"]) {
                return createResponse(request.requestType, responseData)
            }
            return undefined;
        }));
    }
}

import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from '../services/http-request-service'
import {createNewRequest, RequestType, StopsRequest} from "../services/request";

@Component({
    selector: 'app-route-list-item',
    templateUrl: './route-list-item.component.html',
    styleUrls: ['./route-list-item.component.css'],
})
export class RouteListItemComponent implements OnInit {

    constructor(private readonly requestService : HttpRequestService) { }

    ngOnInit(): void {
        const request = createNewRequest<StopsRequest>(RequestType.Stops);
        request.stopId = "10064";
        this.requestService.getResponse(request).subscribe(response => {
            console.log(response);
        });
    }

}

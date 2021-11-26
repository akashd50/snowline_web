import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from '../services/HttpRequestService'
import {newStopsRequest, RequestType, StopsRequest} from "../services/Request";

@Component({
  selector: 'app-route-list-item',
  templateUrl: './route-list-item.component.html',
  styleUrls: ['./route-list-item.component.css'],
})
export class RouteListItemComponent implements OnInit {

  constructor(private readonly requestService : HttpRequestService) { }

  ngOnInit(): void {
    const request = newStopsRequest();
    request.stopId = "10064";
    this.requestService.getResponse(request);
  }

}

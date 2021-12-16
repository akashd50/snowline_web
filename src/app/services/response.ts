import {RequestType} from "./request";
import {createObject, ObjectType, Stop} from "./core-objects";

export interface Response {
  queryTime: string;
}

export interface StopsResponse extends Response {
  stops: Stop[];
}

export function createResponse(requestType: RequestType, responseData: any) {
    switch (requestType) {
        case RequestType.Stops:
            let response = { queryTime: responseData["query-time"] } as StopsResponse;
            if (responseData["stop"]) {
                response.stops = [createObject(ObjectType.Stop, responseData["stop"])]
            } else if (responseData["stops"]) {
                response.stops = []
                responseData["stops"].forEach(stopData => {
                    response.stops.push(createObject(ObjectType.Stop, stopData))
                });
            }
            return response;
    }
}

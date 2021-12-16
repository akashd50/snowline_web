import {API_URL, STOPS} from "./consts";

export enum RequestType {
    Stops,
    None
}

export const paramsMap = {
    [RequestType.Stops]: ["usage", "distance", "x", "y", "walking", "street", "route", "variant", "lat", "lon"]
}

export const requestTypeToUrl = {
    [RequestType.Stops]: STOPS
}

export interface Request {
    id?: string;
    requestType: RequestType;
    usage?: string;
}

export interface StopsRequest extends Request {
    stopId?:string; // Find information about this stop
    street?: string;
    route?: string;
    variant?: string;
    x?: string;
    y?: string;
    lat?: string;
    lon?: string;
    distance?: string;
    walking?: boolean;
}

export function createNewRequest<Type>(requestType: RequestType): Type {
    return {
        requestType: requestType,
        usage: "long"
    } as unknown as Type;
}

export function getUrl(request: Request): string {
    if (request.requestType == RequestType.Stops) {
        const stopRequest = request as StopsRequest;
        const params = paramsMap[stopRequest.requestType];
        let url = API_URL + requestTypeToUrl[stopRequest.requestType] + "/";
        if (stopRequest.stopId) {
            url += stopRequest.stopId;
        }
        url += ".json";
        url += "?api-key=OrN9z8x8KwWXb5o39hoD";

        params.forEach(p => {
            if (stopRequest[p]) {
                url += "&";
                url += p + "=" + stopRequest[p];
            }
        });
        return url;
    }
}

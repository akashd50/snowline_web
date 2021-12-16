export interface SObject {
    key: string;
}

export interface UTM {
    zone: string;
    x: number;
    y: number;
}

export interface LatLng {
    latitude: string;
    longitude: string;
}

export interface Centre {
    utm: UTM;
    geographic: LatLng;
}

export interface Street extends SObject {
    name: string;
    type: string;
}

const propertiesMap = {
    "key": "key",
    "name": "name",
    "number": "number",
    "direction": "direction",
    "side": "side",
    "street": "street",
    "cross-street": "crossStreet",
    "centre": "centre",
    "distance": "distance",
    "query-time": "queryTime",
}

export interface Stop extends SObject {
    name: string;
    number: number;
    direction: string;
    side: string;
    street: Street;
    crossStreet: Street;
    centre: Centre;
    distance: string;
}


export enum ObjectType {
    Stop,
    None
}

export function createObject(objectType: ObjectType, data: any): any {
    switch (objectType) {
        case ObjectType.Stop:
            let object = {};
            Object.keys(propertiesMap).forEach(key => {
                if (data[key]) {
                    object[propertiesMap[key]] = data[key];
                }
            });
            return object as Stop;
    }
}

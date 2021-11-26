import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {} from 'googlemaps';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(map);

    // const loader = new Loader({
    //   apiKey: "AIzaSyDcwGyRxRbcNGWOFQVT87A1mkxEOfm8t0w",
    //   version: "weekly"
    // });
    //
    // let map;
    // loader.load().then(() => {
    //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // }).catch(e => {
    //   console.log(e);
    // });
  }

}

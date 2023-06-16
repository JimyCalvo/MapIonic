import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  map: Leaflet.Map;
  

  constructor() { }

  ngOnInit() { }
  ionViewDidEnter() { this.leafletMap(); }

  

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([-0.210475341974163, -78.488109678153141], 15);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    var myIcon = Leaflet.icon({
      iconUrl: './assets/marker.png',
      iconSize: [44.8, 44.1],
      iconAnchor: [15.4, 44.1],
      popupAnchor:  [0, -44],
  });
    Leaflet.marker([-0.21, -78.48], {icon: myIcon}).addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }

}
import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  zoom = 15;
  center: google.maps.LatLngLiteral = {
    lat: 47.688178,
    lng: -122.001134
  };

  constructor() { }

  ngOnInit(): void {
  }

}

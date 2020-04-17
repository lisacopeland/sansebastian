import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 47.6869138,
    lng: -122.0007454
  };

  constructor() { }

  ngOnInit(): void {
  }

}

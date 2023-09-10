import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  @ViewChild('mapContainer', { static: false }) mapContainer:
    | ElementRef
    | undefined;

  constructor() {}

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  // ngOnInit() {
  //   this.initMap();
  // }

  // initMap() {
  //   const mapOptions = {
  //     center: { lat: 37.7749, lng: -122.4194 }, // Set the initial map center
  //     zoom: 13, // Set the initial zoom level
  //   };

  //   const map = new google.maps.Map(
  //     this.mapContainer?.nativeElement,
  //     mapOptions
  //   );
  // }
}

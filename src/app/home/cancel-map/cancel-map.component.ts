import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { FiltersService } from 'src/app/filters.service';
import { FrontEndService } from 'src/app/front-end.service';
import { CancelOrder } from 'src/app/models/cancel_order.model';
import { CancelSupplier } from 'src/app/models/cancel_supplier.model';

@Component({
  selector: 'app-cancel-map',
  templateUrl: './cancel-map.component.html',
  styleUrls: ['./cancel-map.component.scss'],
})
export class CancelMapComponent implements OnInit {
  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;
  currentMarker?: CancelSupplier;
  currentMarkerOrder: CancelOrder = {
    rg_number: 0,
    product_id: '',
    product_name: '',
    longitude: 999,
    latitude: 99,
    address: '',
    cancel_reason: '',
  };

  options: google.maps.MapOptions = {
    center: { lat: 24.795635, lng: 120.992062 },
    zoom: 14,
  };

  circleCenter: google.maps.LatLngLiteral = {
    lat: this.filters.latitudSelected || 0,
    lng: this.filters.longitudSelected || 0,
  };

  is_supplier = true;

  markers: any[] = [];
  orders: any[] = [];

  constructor(
    public frontEndService: FrontEndService,
    public filters: FiltersService
  ) {
    this.filters.positionSelected = {
      id: 'pointSelected',
      lat: this.filters.latitudSelected,
      lng: this.filters.longitudSelected,
    };
  }

  ngOnInit(): void {
    this.startData();
    this.frontEndService.listChangedEvent.subscribe(() => {
      this.startData();
    });

    this.filters.centerChanged.subscribe(() => {
      console.log(this.filters.positionSelected);
      this.options = {
        center: {
          lat: this.filters.positionSelected.lat,
          lng: this.filters.positionSelected.lng,
        },
        zoom: 12,
      };

      this.filters.positionSelected = {
        ...this.filters.positionSelected,
      };
    });
  }

  addMarker($event: any) {
    this.filters.latitudSelected = $event.latLng.lat();
    this.filters.longitudSelected = $event.latLng.lng();
    this.filters.positionSelected = {
      id: 'pointSelected',
      lat: this.filters.latitudSelected,
      lng: this.filters.longitudSelected,
    };
    this.getCancelSuppliers();
  }

  startData() {
    this.frontEndService.listOfOrders = [];
    this.orders = new Array();
    this.filters.radius = 3000
    this.filters.supplierSelected = undefined
    this.markers = [];
    this.orders = [];
    this.markers = this.frontEndService.listOfCancelSuppliers.map((x) => {
      return {
        id: x.supplier_id,
        lat: x.latitude,
        lng: x.longitude,
        label: x.address,
      };
    });
  }

  openInfoWindow(marker: MapMarker, custom_marker: any) {
    this.filters.supplierSelected = custom_marker.id;
    this.circleCenter = {
      lat: custom_marker.lat || 0,
      lng: custom_marker.lng || 0,
    };

    this.is_supplier = true;
    this.markers = this.markers.map((marker) => {
      marker.selected = false;
      return marker;
    });
    custom_marker.selected = true;

    console.log("listOfCancelSuppliers", this.frontEndService.listOfCancelSuppliers)
    console.log("custom_marker", custom_marker)
    this.currentMarker = this.frontEndService.listOfCancelSuppliers.find(
      (x) => x.supplier_id === custom_marker.id
    );

    console.log(this.currentMarker )
    this.infoWindow.open(marker);
  }

  openOrderInfoWindow(orderMarker: MapMarker, custom_marker: any) {
    console.log('orderMarker', orderMarker);
    this.is_supplier = false;
    this.orders = this.orders.map((order) => {
      order.selected = false;
      return order;
    });

    custom_marker.selected = true;
    this.currentMarkerOrder = this.frontEndService.listOfCancelOrders.find(
      (x) => x.product_id === custom_marker.product_id
    ) as any;
    this.infoWindow.open(orderMarker);
  }

  async getCancelSuppliers() {
    await this.frontEndService.fetchCancelSuppliers(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district
    );
  }

  async viewCancelOrders(id: number) {
    await this.frontEndService.fetchCancelOrders(
      id,
      this.filters.season,
      this.filters.radius
    );

    this.orders = new Array();
    this.orders = this.orders.concat(
      this.frontEndService.listOfCancelOrders?.map((x) => {
        return {
          id: x.rg_number,
          product_id: x.product_id,
          product_name: x.product_name,
          address: x.address,
          lat: x.latitude,
          lng: x.longitude,
          cancel_reason: x.cancel_reason,
        };
      })
    );
  }
}

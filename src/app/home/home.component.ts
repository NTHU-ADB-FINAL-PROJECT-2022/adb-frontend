import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';
import { Town } from '../models/town.model';
import { Options } from '@angular-slider/ngx-slider';
import { FiltersService } from '../filters.service';

import { CITIES } from '../constant/city';
import { getDistrict } from '../constant/district';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showFiller = false;

  listOfCounties = CITIES;
  listOfTowns: Town[] = [];
  listOfMainUse: string[] = [];

  //Slider:
  distanceSliderOptions: Options = {
    floor: 0,
    ceil: 50000,
    step: 100,
    showTicks: false,
  };

  viewAs: 'map' | 'table' = 'map';

  constructor(
    private frontEndService: FrontEndService,
    private ref: ChangeDetectorRef,
    public filters: FiltersService
  ) {}

  async ngOnInit() {
    this.filters.typeSelected = 'all';
    this.getTowns();
  }

  selectSeason(season: string) {
    this.filters.season = season;
  }

  getData() {
    this.clearResult()
    if (this.viewAs === 'table') {
      switch (this.filters.typeSelected) {
        case 'all':
          this.getProducts();
          break;
        case 'cancel':
          this.getCancelProducts();
          break;
        case 'return':
          this.getReturnProducts();
          break;
        default:
          break;
      }
    } else {
      switch (this.filters.typeSelected) {
        case 'all':
          this.getSuppliers();
          break;
        case 'cancel':
          this.getCancelSuppliers();
          break;
        case 'return':
          this.getReturnSuppliers();
          break;
        default:
          break;
      }
    }
  }

  clearResult() {
    this.frontEndService.listOfCancelOrders = [];
    this.frontEndService.listOfCancelProduct = [];
    this.frontEndService.listOfCancelSuppliers = [];
    this.frontEndService.listOfReturnOrders = [];
    this.frontEndService.listOfReturnProduct = [];
    this.frontEndService.listOfReturnSuppliers = [];
    this.frontEndService.listOfOrders = [];
    this.frontEndService.listOfSuppliers = [];
    this.frontEndService.listOfProduct = [];
  }

  clearFilters() {
    this.filters.countySelected = undefined;
    this.filters.townSelected = undefined;
    this.filters.radius = 0;
    this.filters.townSelected = undefined;
    this.filters.supplierSelected = undefined;
    this.filters.season = '';
    this.clearResult()
  }

  selectView(view: 'table' | 'map') {
    this.viewAs = view;
  }

  // Master data
  async getTowns() {
    this.listOfTowns = new Array();
    if (!this.filters.countySelected) {
      return;
    }
    this.listOfTowns = getDistrict(this.filters.countySelected.city);
  }

  changedCounty(event: any) {
    this.filters.townSelected = undefined;
    this.filters.latitudSelected = this.filters.countySelected?.latitude;
    this.filters.longitudSelected = this.filters.countySelected?.longitude;
    this.filters.positionSelected.lng = this.filters.countySelected?.longitude;
    this.filters.positionSelected.lat = this.filters.countySelected?.latitude;
    this.filters.centerChanged.emit();
    this.getTowns();
  }

  changedTown(event: any) {
    this.filters.latitudSelected = this.filters.townSelected?.latitude;
    this.filters.longitudSelected = this.filters.townSelected?.longitude;
    this.filters.positionSelected.lng = this.filters.townSelected?.longitude;
    this.filters.positionSelected.lat = this.filters.townSelected?.latitude;
    this.filters.centerChanged.emit();
  }

  //  ALL
  async getProducts() {
    await this.frontEndService.fetchProducts(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district,
      this.filters.season
    );
  }

  async getSuppliers() {
    await this.frontEndService.fetchSuppliers(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district
    );
  }

  // Cancel
  async getCancelProducts() {
    await this.frontEndService.fetchCancelProducts(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district,
      this.filters.season
    );
  }

  async getCancelSuppliers() {
    await this.frontEndService.fetchCancelSuppliers(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district
    );
  }

  // Return
  async getReturnProducts() {
    await this.frontEndService.fetchReturnProducts(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district,
      this.filters.season
    );
  }

  async getReturnSuppliers() {
    await this.frontEndService.fetchReturnSuppliers(
      this.filters.countySelected?.city,
      this.filters.townSelected?.district
    );
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { min } from 'rxjs';
import { BackEndService } from './back-end.service';
import { CITIES } from './constant/city';
import { County } from './models/county.model';
import { Supplier } from './models/supplier.model';
import { Order } from './models/order.model';
import { Town } from './models/town.model';
import { AllProduct } from './models/all_product_model';
import { CancelSupplier } from './models/cancel_supplier.model';
import { CancelOrder } from './models/cancel_order.model';
import { CancelProduct } from './models/cancel_product.model';
import { ReturnSupplier } from './models/return_supplier.model';
import { ReturnProduct } from './models/return_product.model';
import { ReturnOrder } from './models/return_order.model';

@Injectable({
  providedIn: 'root',
}) /* This is to convert this class into a service*/
export class FrontEndService {
  listOfCounties: County[] = CITIES;
  listOfTowns: Town[] = [];
  // ALL
  listOfSuppliers: Supplier[] = [] as any;
  listOfOrders: Order[] = [];
  listOfProduct: AllProduct[] = [];

  // Cancel
  listOfCancelSuppliers: CancelSupplier[] = [];
  listOfCancelOrders: CancelOrder[] = [];
  listOfCancelProduct: CancelProduct[] = [];

  // Return
  listOfReturnSuppliers: ReturnSupplier[] = [];
  listOfReturnOrders: ReturnOrder[] = [];
  listOfReturnProduct: ReturnProduct[] = [];

  isLoadingResults: boolean = false;
  listChangedEvent: EventEmitter<any> = new EventEmitter();
  stationsChangedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private apiService: BackEndService) {}

  // ALL
  async fetchSuppliers(city?: string, district?: string) {
    this.isLoadingResults = true;
    var response = await this.apiService.getSuppliers(city, district);
    console.log(response)
    this.listOfSuppliers = response;
    console.log(this.listOfSuppliers)
    this.listChangedEvent.emit();
    this.isLoadingResults = false;
  }

  async fetchOrders(supplier_id: number, season?: string, radius?: number) {
    this.isLoadingResults = true;
    var response = await this.apiService.getOrders(supplier_id, season, radius);
    this.listOfOrders = response;
    this.stationsChangedEvent.emit();
    this.isLoadingResults = false;
  }

  async fetchProducts(city?: string, district?: string, season?: string) {
    this.isLoadingResults = true;
    const response = await this.apiService.getProducts(city, district, season);

    this.listOfProduct = response;
    this.listChangedEvent.emit();
    this.isLoadingResults = false;
  }

  // RETURN
  async fetchReturnSuppliers(city?: string, district?: string) {
    this.isLoadingResults = true;
    var response = await this.apiService.getReturnSuppliers(city, district);
    this.listOfReturnSuppliers = response;
    this.listChangedEvent.emit();
    this.isLoadingResults = false;
  }

  async fetchReturnOrders(
    supplier_id: number,
    season?: string,
    radius?: number
  ) {
    this.isLoadingResults = true;
    var response = await this.apiService.getReturnOrders(supplier_id, season, radius);
    this.listOfReturnOrders = response;
    this.stationsChangedEvent.emit();
    this.isLoadingResults = false;
  }

  async fetchReturnProducts(city?: string, district?: string, season?: string) {
    this.isLoadingResults = true;
    const response = await this.apiService.getReturnProducts(city, district, season);

    this.listOfReturnProduct = response;
    this.listChangedEvent.emit();
    this.isLoadingResults = false;
  }

  // CANCEL 
  async fetchCancelSuppliers(city?: string, district?: string) {
    this.isLoadingResults = true;
    var response = await this.apiService.getCancelSuppliers(city, district);
    this.listOfCancelSuppliers = response;
    this.listChangedEvent.emit();
    this.isLoadingResults = false;
  }

  async fetchCancelOrders(
    supplier_id: number,
    season?: string,
    radius?: number
  ) {
    this.isLoadingResults = true;
    var response = await this.apiService.getCancelOrders(supplier_id, season, radius);
    this.listOfCancelOrders = response;
    this.stationsChangedEvent.emit();
    this.isLoadingResults = false;
  }

  async fetchCancelProducts(city?: string, district?: string, season?: string) {
    this.isLoadingResults = true;
    const response = await this.apiService.getCancelProducts(city, district, season);

    this.listOfCancelProduct = response;
    this.listChangedEvent.emit();
    this.isLoadingResults = false;
  }
}

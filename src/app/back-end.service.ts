import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SUPPLIERS } from './constant/mock_all_suppliers';
import { ORDERS } from './constant/mock_all_orders';
import { PRODUCTS } from './constant/mock_all_products';
import { CANCEL_ORDERS } from './constant/mock_cancel_orders';
import { CANCEL_PRODUCTS } from './constant/mock_cancel_product';
import { CANCEL_SUPPLIERS } from './constant/mock_cancel_suppliers';
import { RETURN_SUPPLIERS } from './constant/mock_return_suppliers';
import { RETURN_ORDERS } from './constant/mock_return_orders';
import { RETURN_PRODUCTS } from './constant/mock_return_product';

@Injectable({ providedIn: 'root' }) //makes this to become a service
export class BackEndService {
  baseUrl: string = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    ),
  };

  constructor(private http: HttpClient) {}

  // All
  public async getSuppliers(city?: string, district?: string): Promise<any> {
    try {
      var params = new HttpParams()
        .set('city', city || ' ')
        .set('district', district || ' ');

      return await this.get('/get_suppliers', params);
    } catch (ex: any) {
      return {
        result: SUPPLIERS,
      };
    }
  }

  public async getOrders(
    id: number,
    season?: string,
    radius?: number
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('supplier_id', id.toString())
        .set('season', season || '')
        .set('radius', radius?.toString() || '');

      return await this.get('/get_orders', params);
    } catch (ex: any) {
      return {
        result: ORDERS,
      };
    }
  }

  public async getProducts(
    city?: string,
    district?: string,
    season?: string
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('city', city || '')
        .set('district', district || '')
        .set('season', season || '');

      return await this.get('/get_products', params);
    } catch (ex: any) {
      return {
        result: PRODUCTS,
      };
    }
  }

  // Cancel order
  public async getCancelSuppliers(
    city?: string,
    district?: string
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('city', city || '')
        .set('district', district || '');

      return await this.get('/get_cancel_suppliers', params);
    } catch (ex: any) {
      return {
        result: CANCEL_SUPPLIERS,
      };
    }
  }

  public async getCancelOrders(
    id: number,
    season?: string,
    radius?: number
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('supplier_id', id.toString())
        .set('season', season || '')
        .set('radius', radius?.toString() || '');

      return await this.get('/get_cancel_orders', params);
    } catch (ex: any) {
      return {
        result: CANCEL_ORDERS,
      };
    }
  }

  public async getCancelProducts(
    city?: string,
    district?: string,
    season?: string
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('city', city || '')
        .set('district', district || '')
        .set('season', season || '');

      return await this.get('/get_cancel_products', params);
    } catch (ex: any) {
      return {
        result: CANCEL_PRODUCTS,
      };
    }
  }

  // Return order
  public async getReturnSuppliers(
    city?: string,
    district?: string
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('city', city || '')
        .set('district', district || '');

      return await this.get('/get_return_suppliers', params);
    } catch (ex: any) {
      return {
        result: RETURN_SUPPLIERS,
      };
    }
  }

  public async getReturnOrders(
    id: number,
    season?: string,
    radius?: number
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('supplier_id', id.toString())
        .set('season', season || '')
        .set('radius', radius?.toString() || '');

      return await this.get('/get_return_orders', params);
    } catch (ex: any) {
      return {
        result: RETURN_ORDERS,
      };
    }
  }

  public async getReturnProducts(
    city?: string,
    district?: string,
    season?: string
  ): Promise<any> {
    try {
      var params = new HttpParams()
        .set('city', city || '')
        .set('district', district || '')
        .set('season', season || '');

      return await this.get('/get_return_products', params);
    } catch (ex: any) {
      return {
        result: RETURN_PRODUCTS,
      };
    }
  }

  private async get(url: string, params: HttpParams) {
    console.log(url, params);
    return await this.http
      .get(this.baseUrl + url, { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.handleError(error);
        })
      )
      .toPromise();
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}

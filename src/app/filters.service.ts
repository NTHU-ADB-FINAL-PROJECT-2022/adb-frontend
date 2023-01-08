import { EventEmitter, Injectable } from '@angular/core';
import { County } from './models/county.model';
import { Town } from './models/town.model';

@Injectable({
  providedIn: 'root',
}) /* This is to convert this class into a service*/
export class FiltersService {
  countySelected?: County;
  townSelected?: Town;
  supplierSelected?: number;
  typeSelected?: 'all' | 'cancel' | 'return';
  latitudSelected?: number = 24.795635;
  longitudSelected?: number = 120.992062;
  positionSelected: any;
  radius: number = 3000;
  season?: string;
  centerChanged: EventEmitter<any> = new EventEmitter();
}

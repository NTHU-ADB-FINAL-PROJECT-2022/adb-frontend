import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FrontEndService } from 'src/app/front-end.service';
import { CancelProduct } from 'src/app/models/cancel_product.model';

@Component({
  selector: 'app-cancel-table',
  templateUrl: './cancel-table.component.html',
  styleUrls: ['./cancel-table.component.scss']
})
export class CancelTableComponent implements OnInit {
  displayedColumns: string[] = ['supplier_id', 'supplier_name', 'product_id', 'product_name', 'cancel_reason', 'frequency'];
  dataSource: MatTableDataSource<CancelProduct> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public frontEndService: FrontEndService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.startData();
    this.frontEndService.listChangedEvent.subscribe(() => {
      this.startData();
    });
  }

  startData() {
    this.dataSource = new MatTableDataSource(this.frontEndService.listOfCancelProduct);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

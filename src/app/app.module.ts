import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SupplierTableComponent } from './home/supplier-table/supplier-table.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CancelTableComponent } from './home/cancel-table/cancel-table.component';
import { ReturnTableComponent } from './home/return-table/return-table.component';
import { SaleMapComponent } from './home/supplier-map/supplier-map.component';
import { CancelMapComponent } from './home/cancel-map/cancel-map.component';
import { ReturnMapComponent } from './home/return-map/return-map.component';
import { GraphComponent } from './graph/graph.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TeamMemberComponent,
    HomeComponent,
    SupplierTableComponent,
    CancelTableComponent,
    ReturnTableComponent,
    SaleMapComponent,
    CancelMapComponent,
    ReturnMapComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    GoogleMapsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSliderModule,
    NgxSliderModule,
    MatSortModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatChipsModule
    // Neovis
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

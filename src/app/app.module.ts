import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AnalyticalDataGraphComponent } from './analyticalData/analytical-data-graph/analytical-data-graph.component';
import { AddNewAnalyticalDataComponent } from './analyticalData/add-new-analytical-data/add-new-analytical-data.component';
import { AnalyticalDataSetService } from '../app/services/analytical-data-set.service';


@NgModule({
  declarations: [
    AppComponent,
    AnalyticalDataGraphComponent,
    AddNewAnalyticalDataComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [AnalyticalDataSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

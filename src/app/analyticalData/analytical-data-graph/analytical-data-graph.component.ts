import { Component, OnInit} from '@angular/core';
import { Color, Label } from 'ng2-charts';

import { AnalyticalDataSetService } from '../../../app/services/analytical-data-set.service';

@Component({
  selector: 'app-analytical-data-graph',
  templateUrl: './analytical-data-graph.component.html',
  styleUrls: ['./analytical-data-graph.component.css']
})
export class AnalyticalDataGraphComponent implements OnInit {

  AnalyticalData = this.analyticalDataSetService.GetAnalyticalDataAll();

  columnDefs = [
    {headerName: 'Date Of Upload', field: 'dateOfUpload', sortable: true },
    {headerName: 'Minimum for Series', field: 'minForSeries', sortable: true },
    {headerName: 'Maximum for Series', field: 'maxForSeries', sortable: true},
    {headerName: 'Average For Series', field: 'averageForSeries', sortable: true },
    {headerName: 'Start Of Most Expensive Hour', field: 'startOfMostExpensiveHour', sortable: true },
];

  rowData = this.analyticalDataSetService.GetAnalyticalMetaDataAll();

  Points: Number[] = [];
  DateTimes: string[] = [];

  constructor(private analyticalDataSetService: AnalyticalDataSetService) { 
    this.AnalyticalData.subscribe(data => { data.forEach( element => { this.Points.push(element.point); }); });
    this.AnalyticalData.subscribe(data => { data.forEach( element => { this.DateTimes.push(element.dateTime); }); });
  
    console.log(this.DateTimes);
  }

  ngOnInit(): void {
  }

  lineChartData = [ { data: this.Points, label: 'Data Analysis' } ];

  lineChartLabels: Label[] = this.DateTimes;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
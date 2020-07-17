import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnalyticalDataSetService } from '../../../app/services/analytical-data-set.service';
import { AddDataSet } from '../../../app/model/add-data-set';


@Component({
  selector: 'app-add-new-analytical-data',
  templateUrl: './add-new-analytical-data.component.html',
  styleUrls: ['./add-new-analytical-data.component.scss']
})

export class AddNewAnalyticalDataComponent implements OnInit {
  constructor(private analyticalDataSetService: AnalyticalDataSetService) { }
  
  addDataSet: AddDataSet = null;
  
  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.addDataSet = new AddDataSet(files[0].name);

    this.analyticalDataSetService.AddNewGetAnalyticalDataSet(this.addDataSet);/*-.subscribe( { complete()  
      { 
        this.analyticalDataSetService.GetAnalyticalDataAll();
        this.analyticalDataSetService.GetAnalyticalMetaDataAll();
       } } );*/
  }
}

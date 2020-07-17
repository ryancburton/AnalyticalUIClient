import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';

import { AddDataSet } from '../../app/model/add-data-set';
import { AnalyticalDataSet } from '../../app/model/analytical-data-set';
import { AnalyticalMetaDataSet } from '../../app/model/analytical-meta-data-set';

@Injectable({
  providedIn: 'root'
})
export class AnalyticalDataSetService {

  public addDataSet: AddDataSet;

  constructor(private http: HttpClient) {
  }

  GetAnalyticalDataAll() : Observable<AnalyticalDataSet[]> {
    console.log('Calling GetAnalyticalDataAll');
    return this.http.get<AnalyticalDataSet[]>('/api/AnalyticalData/GetAnalyticalDataAll');
  }

  GetAnalyticalMetaDataAll() : Observable<AnalyticalMetaDataSet[]> {
    return this.http.get<AnalyticalMetaDataSet[]>('/api/AnalyticalData/GetAnalyticalMetaDataAll');
  }

  AddNewGetAnalyticalDataSet(addDataSet: AddDataSet): Observable<any> {
    let httpParams = new HttpParams().append('fileToImport', addDataSet.fileToUpload)

    console.log('Importing File:' + addDataSet.fileToUpload);
        
    this.http.post<any>('/api/AnalyticalData/ImportNewDataSet/' + addDataSet.fileToUpload, httpParams)
    .subscribe( (val) => { 
      console.log("POST call successful value returned in body", val);
      this.GetAnalyticalDataAll();
    })
    , response => {console.log("POST call in error", response)};
        
    return;
    }
}

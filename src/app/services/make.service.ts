import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MakeService {
  endpoint="http://127.0.0.1:3000/";
  makeChange = new EventEmitter();

  constructor(private http: HttpClient) { }

  getMakes(){
    var thisObj = this;
      return this.http
        .get(thisObj.endpoint + 'vehicles')
        .map(response => response);
  }
  
  getImage(make, model){
    var thisObj = this;
    return this.http
    .get(thisObj.endpoint + 'vehicles/'+ make +'/'+ model, { responseType: 'blob' })
    .map(response => response);
  }

}

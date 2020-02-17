import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pizzaList } from './pizzaList';
import { crustModelList } from './crustModelList';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _urlCat: string = "http://localhost:8082/category/getAllCategory";
  private _urlCrust:string = "http://localhost:8082/crust/getAllCrust";
  constructor(private http : HttpClient) { }

   getCategoryData():Observable<pizzaList>{
   
    return this.http.get<pizzaList>(this._urlCat);

  }

  getCrustData():Observable<crustModelList>{
    return this.http.get<crustModelList>(this._urlCrust);
  }
  
}

import { ToppingsModelList } from './models/ToppingsModelList';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pizzaList } from './models/pizzaList';
import { crustModelList } from './models/crustModelList';
import { AllOrders } from './models/AllOrders';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _urlCat: string = "http://localhost:8082/category/getAllCategory";
  private _urlCrust:string = "http://localhost:8082/crust/getAllCrust";
  private _urlToppings:string = "http://localhost:8082/toppings/getAllToppings";
  private _urlOrder = "http://localhost:8082/order/getAllOrders";
  constructor(private http : HttpClient) { }

   getCategoryData():Observable<pizzaList>{
   
     return this.http.get<pizzaList>(this._urlCat);

   }

  getCrustData():Observable<crustModelList>{
    return this.http.get<crustModelList>(this._urlCrust);
  }

  getToppingsData():Observable<ToppingsModelList>{
    return this.http.get<ToppingsModelList>(this._urlToppings);
  }
  getOrdersData() : Observable<AllOrders>{

    return this.http.get<AllOrders>(this._urlOrder);

  }
}

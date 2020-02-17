import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllOrders } from './models/AllOrders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _orderUrl = "http://localhost:8082/order/getAllOrders";


  constructor( public http : HttpClient) { }

  getAllOrders() : Observable<AllOrders>{

    return (this.http.get<AllOrders>(this._orderUrl));

  }

  

  

}

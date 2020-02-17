import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllOrders } from './models/AllOrders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( public http : HttpClient) { }

  getAllOrders() : Observable<AllOrders>{

    return (this.http.get<AllOrders>("http://localhost:8082/order/getAllOrders"));

  }

  

}

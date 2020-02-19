import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToppingsModel } from './models/ToppingsModel';
import { crustModel } from './models/crustModel';
@Injectable({
  providedIn: 'root'
})
export class AdminPostService {

  _urlAddTopping="http://localhost:8082/toppings/addToppings";
  _urlAddCrust="http://localhost:8082/crust/addCrust";
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) {
   }

   addTopping(topping:ToppingsModel){
    
    return this.http.post<ToppingsModel>(this._urlAddTopping, topping,this.httpOptions);
    
   }

   addCrust(crust:crustModel){
    return this.http.post<crustModel>(this._urlAddCrust, crust,this.httpOptions);
    
   }

   


}

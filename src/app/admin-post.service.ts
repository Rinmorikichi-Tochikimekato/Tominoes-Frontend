import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToppingsModel } from './models/ToppingsModel';
@Injectable({
  providedIn: 'root'
})
export class AdminPostService {

  _urlAddTopping="http://localhost:8082/toppings/addToppings"
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

   


}

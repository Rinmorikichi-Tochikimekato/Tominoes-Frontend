import { GetOrderPrice } from './models/GetOrderPrice';
import { ToppingsModelList } from './models/ToppingsModelList';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pizzaList } from './models/pizzaList';
import { crustModelList } from './models/crustModelList';
import { AllOrders } from './models/AllOrders';
import { Order } from './models/Order';
import { OrderDetails } from './order';
import { Price } from './models/Price';
import { PriceList } from './models/PriceList';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _urlCat: string = "http://localhost:8082/category/getAllCategory";
  private _urlCrust:string = "http://localhost:8082/crust/getAllCrust";
  private _urlToppings:string = "http://localhost:8082/toppings/getAllToppings";
  private _urlOrder = "http://localhost:8082/order/getAllOrders";
  private _urlcalculatePrice:string = "http://localhost:8082/order/calculatePrice"
  private _gsturl="http://localhost:8082/tax/getAllTaxFields";
  public order=[];
  public bill;
  public gst=[];
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    
    })
  };
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
  
  getOrderPrice(GetOrderprice:GetOrderPrice){
    return this.http.post<GetOrderPrice>(this._urlcalculatePrice, GetOrderprice, this.httpOptions);

  }
  getGST(): Observable<PriceList>{
    return this.http.get<PriceList>(this._gsturl);
                    // .catch(this.errorHandler);
  }
  placeOrder(Order_obj){
    
    return this.http.post<OrderDetails>("http://localhost:8082/order/placeOrder",Order_obj,{
      headers:new HttpHeaders({
        'Content-Type':"application/json"
      })
    })
  }
}

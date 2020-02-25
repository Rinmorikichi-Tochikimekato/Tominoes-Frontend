import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToppingsModel } from './models/ToppingsModel';
import { crustModel } from './models/crustModel';
import { pizzaCategory } from './models/pizzaCategory';
import { Price } from './models/Price';
@Injectable({
  providedIn: 'root'
})
export class AdminPostService {

  _urlAddTopping = "http://localhost:8082/toppings/addToppings";
  _urlAddCrust = "http://localhost:8082/crust/addCrust";
  _urlAddCategory = "http://localhost:8082/category/addCategory";
  _urlAddTax = "http://localhost:8082/tax/addTaxField";


  _urlDeleteTopping = "http://localhost:8082/toppings/deleteToppingByName";
  _urlDeleteCrust = "http://localhost:8082/crust/deleteCrustByName";
  _urlDeleteCategory = "http://localhost:8082/category/deleteCategoryByName";
  _urlDeleteTax = "http://localhost:8082/tax/deletetaxByName";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) {
  }

  addTopping(topping: ToppingsModel) {

    return this.http.post<ToppingsModel>(this._urlAddTopping, topping, this.httpOptions);

  }

  addCrust(crust: crustModel) {
    return this.http.post<crustModel>(this._urlAddCrust, crust, this.httpOptions);

  }

  addCategory(category: pizzaCategory) {
    return this.http.post<crustModel>(this._urlAddCategory, category, this.httpOptions);

  }


  addTax(tax: Price) {
    return this.http.post<Price>(this._urlAddTax, tax, this.httpOptions);

  }





  deleteTopping(topping: ToppingsModel) {


    let options = {
      headers: this.httpOptions.headers,
      body: topping
    };



    return this.http.delete(this._urlDeleteTopping, options);




  }

  deleteCrust(crust: crustModel) {

    let options = {
      headers: this.httpOptions.headers,
      body: crust
    };



    return this.http.delete(this._urlDeleteCrust, options);

  }

  deleteCategory(category: pizzaCategory) {
    console.log(category);

    let options = {
      headers: this.httpOptions.headers,
      body: category
    };



    return this.http.delete(this._urlDeleteCategory, options);



  }


  deleteTax(tax: Price) {

    let options = {
      headers: this.httpOptions.headers,
      body: tax
    };



    return this.http.delete(this._urlDeleteTax, options);


  }



}

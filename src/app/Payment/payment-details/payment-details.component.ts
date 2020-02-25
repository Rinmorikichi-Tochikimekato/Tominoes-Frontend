import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { Price } from '../../models/Price';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
 public order;
 public errorMsg;
 dataSource;
 displayedColumns=["heading","value"];
 tax;
id;
 cgst;
 sgst;
public gst=[];
data;
  constructor(private _dataService : DataService,private router: Router) { }

  ngOnInit(): void {
    console.log(this._dataService.bill)
      this.order=this._dataService.order;
      // console.log(this.data);
      // this.id=this._dataService.bill.id;
      this.gst=this._dataService.gst;
    this.dataSource=  [
      {
        heading: "Date",
         value :  this._dataService.bill.date
       },  
      {
          heading: "Pizza Name",
           value :  this._dataService.bill.pizzaName
         },
         {
           heading: "Crust Name",
            value :  this._dataService.bill.crustName
          },
          {
           heading: "Toppings",
            value :  this.order.topings
          },
          {
           heading: "Base Price",
            value :  this._dataService.bill.price.basePrice
          },
          {
           heading: "CGST",
            value :  this._dataService.bill.price.cgst
          },
          {
           heading: "SGST",
            value :  this._dataService.bill.price.sgst
          },
          {
           heading: "Total Price",
            value :  this._dataService.bill.price.totalPrice
          }
         
     
      ]
     
      }
    //  console.log(this.dataSource);
   
 
  


}



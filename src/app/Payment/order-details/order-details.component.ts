import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { Price } from '../../models/Price';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
 public order;
 public errorMsg;
 dataSource;
 displayedColumns=["heading","value"];
public cgst;
public sgst;
  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
      this.order=this._dataService.order;
    this.dataSource=  [
        {
          heading: "Pizza Name",
           value :  this.order.pizzaName
         },
         {
           heading: "Crust Name",
            value :  this.order.crustName
          },
          {
           heading: "Toppings",
            value :  this.order.topings
          },
          {
           heading: "Price",
            value :  this.order.price
          }
     
      ]
     console.log(this.dataSource);
  }
  placeOrder(){
   
    this._dataService.placeOrder(this.order).subscribe((data)=>console.log(data));
  }



}



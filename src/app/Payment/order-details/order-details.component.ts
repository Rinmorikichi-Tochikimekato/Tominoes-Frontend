import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { Price } from '../../models/Price';
import {Router} from '@angular/router';

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
 tax;
 cgst;
 sgst;
public gst=[];

  constructor(private _dataService : DataService,private router: Router) { }

  ngOnInit(): void {
      this.order=this._dataService.order;
      this.gst=this._dataService.gst;
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
           heading: "Base Price",
            value :  this.order.price
          }
         
     
      ]
     console.log(this.dataSource);

     this._dataService.getGST().subscribe((data)=>this.setTax(data.list),(error)=>console.log(error));
  }
  placeOrder(){
   //console.log(this._dataService.gst[0].name);
   this.order.userid=sessionStorage.getItem("id");
   this._dataService.placeOrder(this.order).subscribe((data)=>this.setBill(data));

  }

setTax(data){
 
  this.cgst=data[0].rate;
  this.sgst=data[1].rate;
  
}
setBill(data)
{
  console.log("hey");
  this._dataService.bill=data;
  console.log(this._dataService.bill.pizzaName);
  this.router.navigate(['/lastpage']);

}

}



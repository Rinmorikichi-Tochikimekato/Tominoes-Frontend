import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  orderList : Order[];

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getOrdersData().subscribe((data)=> this.orderList = data.list);
  }

}

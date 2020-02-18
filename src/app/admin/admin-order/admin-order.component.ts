import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  orderList : Order[];

  constructor(private adminService:AdminService) { }

  ngOnInit() {

    this.adminService.getAllOrders().subscribe((data)=> this.orderList = data.list);
  }

}

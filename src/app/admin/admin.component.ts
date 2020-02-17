import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { Price } from '../models/Price';
import { AllOrders } from '../models/AllOrders';
import { Order } from '../models/Order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orderList : Order[];

  constructor(public adminService : AdminService) { }

  ngOnInit() {
      this.adminService.getAllOrders().subscribe((data)=> this.orderList = data.list);
      // console.log(this.orderList);
  }

}

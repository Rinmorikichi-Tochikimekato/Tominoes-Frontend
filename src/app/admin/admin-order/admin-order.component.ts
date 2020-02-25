import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { DataService } from 'src/app/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  orderList;
  displayedColumns: string[] = ['id','pizzaName', 'crustName','topings','price'];
  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getOrdersData().subscribe((data)=> this.orderList = data.list);

  
  }
  
  
  

}


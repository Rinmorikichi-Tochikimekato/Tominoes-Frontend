import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { Price } from '../models/Price';
import { AllOrders } from '../models/AllOrders';
import { Order } from '../models/Order';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  content;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // console.log(this.orderList);
  }

}

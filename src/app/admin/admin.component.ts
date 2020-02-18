import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../models/Price';
import { AllOrders } from '../models/AllOrders';
import { Order } from '../models/Order';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  content;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  


  ngOnInit() {

    // console.log(this.orderList);
  }

}

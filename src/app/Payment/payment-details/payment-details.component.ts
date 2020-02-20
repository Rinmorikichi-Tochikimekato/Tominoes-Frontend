import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
public order;
  constructor(private _dataService : DataService) {       this.order=this._dataService.order;
  }

  ngOnInit() {
    this._dataService.placeOrder(this.order).subscribe((data)=>console.log(data));

  }

}

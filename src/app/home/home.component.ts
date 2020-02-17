import { ToppingsModelList } from './../ToppingsModelList';
import { crustModelList } from './../crustModelList';
import { DataService } from './../data.service';
import { pizzaList } from './../pizzaList';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pizzaCat:pizzaList;
  public crustList:crustModelList;
  public toppingsList : ToppingsModelList;
  constructor(private _dataService : DataService) {
   }

  ngOnInit() {
    this. _dataService.getCategoryData()
     .subscribe(data => this.pizzaCat = data);
  
  
      this._dataService.getCrustData()
    .subscribe(data2 => this.crustList = data2);
    console.log(this.crustList);

      this._dataService.getToppingsData()
    .subscribe(data3 => this.toppingsList = data3);
  }




}

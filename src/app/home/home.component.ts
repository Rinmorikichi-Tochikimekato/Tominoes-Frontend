import { ToppingsModelList } from '../models/ToppingsModelList';
import { crustModelList } from '../models/crustModelList';
import { DataService } from './../data.service';
import { pizzaList } from '../models/pizzaList';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pizzaCat;
  public crustList;
  public toppingsList;
  constructor(private _dataService : DataService) {
   }

  ngOnInit() {
    this. _dataService.getCategoryData()
     .subscribe(data => this.pizzaCat = data.categoryList);
  
  
      this._dataService.getCrustData()
    .subscribe(data2 => this.crustList = data2.list);
    console.log(this.crustList);

      this._dataService.getToppingsData()
    .subscribe(data3 => this.toppingsList = data3.list);
  }




}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-topping',
  templateUrl: './admin-topping.component.html',
  styleUrls: ['./admin-topping.component.css']
})
export class AdminToppingComponent implements OnInit {

  toppingList;
  displayedColumns = ['name','price'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  
    this.dataService.getToppingsData().subscribe((data)=>this.toppingList=data.list);

  }

}

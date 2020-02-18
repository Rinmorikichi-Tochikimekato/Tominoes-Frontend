import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AdminPostService } from 'src/app/admin-post.service';
import { ToppingsModel } from 'src/app/models/ToppingsModel';

@Component({
  selector: 'app-admin-topping',
  templateUrl: './admin-topping.component.html',
  styleUrls: ['./admin-topping.component.css']
})
export class AdminToppingComponent implements OnInit {

  toppingList;
  displayedColumns = ['name','price'];
  tname;
  tprice;
  inputFlag=false;
  topping:ToppingsModel;
  error;
  constructor(private dataService: DataService, private adminPostService: AdminPostService) { }

  ngOnInit() {
  
    this.dataService.getToppingsData().subscribe((data)=>this.toppingList=data.list);

  }

  click(){
   this.topping= {
     name : this.tname,
     price : this.tprice
   }
    this.adminPostService.addTopping(this.topping).subscribe((data)=>alert("Inserted successfully"),(error)=>console.log(error));
    this.dataService.getToppingsData().subscribe((data)=>this.toppingList=data.list);
  
  }

 

}

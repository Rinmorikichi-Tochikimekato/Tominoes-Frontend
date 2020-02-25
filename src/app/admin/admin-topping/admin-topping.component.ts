import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AdminPostService } from 'src/app/admin-service';
import { ToppingsModel } from 'src/app/models/ToppingsModel';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-admin-topping',
  templateUrl: './admin-topping.component.html',
  styleUrls: ['./admin-topping.component.css']
})
export class AdminToppingComponent implements OnInit {

  toppingList;
  displayedColumns = ['name','price','actions'];
  tname;
  tprice;
  inputFlag=false;
  topping:ToppingsModel;
  error;
  dataSource = new MatTableDataSource<ToppingsModel>();
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(private dataService: DataService, private adminService: AdminPostService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataService.getToppingsData().subscribe((data)=>this.dataSource.data=data.list);

  }

  click(){
   this.topping= {
     name : this.tname,
     price : this.tprice
   }
    this.adminService.addTopping(this.topping).subscribe((data)=>this.ngOnInit(),(error)=>console.log(error));
    this.dataService.getToppingsData().subscribe((data)=>this.toppingList=data.list);
  
  }

  deleteTopping(element){
      this.adminService.deleteTopping(element).subscribe((data)=>this.ngOnInit(),(error)=>alert("Some error occoured"));
  
    
  }

}

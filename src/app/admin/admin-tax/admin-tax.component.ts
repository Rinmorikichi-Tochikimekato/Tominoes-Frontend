import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from '../../data.service';
import { AdminService } from '../../admin-service';
import { Price } from '../../models/Price';

@Component({
  selector: 'app-admin-tax',
  templateUrl: './admin-tax.component.html',
  styleUrls: ['./admin-tax.component.css']
})
export class AdminTaxComponent implements OnInit {
  tname;
  trate;
  displayedColumns = ['name','rate','actions'];
  dataSource = new MatTableDataSource<Price>();
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;


  constructor(private dataService : DataService,private adminService:AdminService) { 
   
  }

  ngOnInit() {
    this.dataService.getGST().subscribe((data)=> this.dataSource.data=data.list);
    this.dataSource.paginator = this.paginator;
  }

  addTax(){
    let tax:Price={
      name :this.tname,
      rate:this.trate
    }

  

    console.log(tax);
  this.adminService.addTax(tax).subscribe((data)=>this.ngOnInit(),(error)=>alert("Some error occoured"));

  }

  deleteTax(element){
      
    this.adminService.deleteTax(element).subscribe((data)=>this.ngOnInit(),(error)=>alert("Some error occoured"));


  }
}

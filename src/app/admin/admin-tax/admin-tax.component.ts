import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from 'src/app/data.service';
import { AdminPostService } from 'src/app/admin-post.service';
import { Price } from 'src/app/models/Price';

@Component({
  selector: 'app-admin-tax',
  templateUrl: './admin-tax.component.html',
  styleUrls: ['./admin-tax.component.css']
})
export class AdminTaxComponent implements OnInit {
  tname;
  trate;
  displayedColumns = ['name','rate'];
  dataSource = new MatTableDataSource<Price>();
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;


  constructor(private dataService : DataService,private adminPostService:AdminPostService) { 
   
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
  this.adminPostService.addTax(tax).subscribe((data)=>this.ngOnInit(),(error)=>alert("Some error occoured"));

  }


}

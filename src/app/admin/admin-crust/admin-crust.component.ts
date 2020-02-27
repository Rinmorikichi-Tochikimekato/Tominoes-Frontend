import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { crustModel } from 'src/app/models/crustModel';
import { AdminService } from 'src/app/admin-service';

@Component({
  selector: 'app-admin-crust',
  templateUrl: './admin-crust.component.html',
  styleUrls: ['./admin-crust.component.css']
})
export class AdminCrustComponent implements OnInit {

  cname;
  cprice;
  displayedColumns = ['name','price','actions'];
  dataSource = new MatTableDataSource<crustModel>();
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(private dataService : DataService,private adminService:AdminService) { }

  ngOnInit() {
      this.dataService.getCrustData().subscribe((data)=>this.dataSource.data=data.list);
      this.dataSource.paginator = this.paginator;
  }

  addCrust(){
    let crust:crustModel={
      name :this.cname,
      price:this.cprice
    }

    this.adminService.addCrust(crust).subscribe((data)=>this.ngOnInit(),(error)=>alert("Some error occoured"));

  }
  deleteCrust(element){
    this.adminService.deleteCrust(element).subscribe((data)=>this.ngOnInit(),(error)=>alert("Some error occoured"));

  }

}

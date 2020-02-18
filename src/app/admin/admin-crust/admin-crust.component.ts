import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-crust',
  templateUrl: './admin-crust.component.html',
  styleUrls: ['./admin-crust.component.css']
})
export class AdminCrustComponent implements OnInit {

  crustList;
  displayedColumns = ['name','price'];
  constructor(private dataService : DataService) { }

  ngOnInit() {
      this.dataService.getCrustData().subscribe((data)=>this.crustList=data.list);
  }

}

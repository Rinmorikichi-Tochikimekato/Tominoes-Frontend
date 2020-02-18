import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categoryList;
  displayedColumns = ['name','pizza','price'];
  constructor(private dataService:DataService) { }

  ngOnInit() {
  
    this.dataService.getCategoryData().subscribe((data)=> this.categoryList = data.categoryList);
  
  }



}

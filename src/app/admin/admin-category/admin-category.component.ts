import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatTableDataSource, MatPaginator, MatInput } from '@angular/material';
import { pizzaCategory } from 'src/app/models/pizzaCategory';
import { AdminPostService } from 'src/app/admin-post.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categoryList;
  displayedColumns = ['name','pizza','price'];
  cname;
  cprice;
  pizzas=["pizza0"];
  
  
  @ViewChildren('matInput') children;


  dataSource = new MatTableDataSource<pizzaCategory>();


  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;


  constructor(private dataService:DataService , private adminService: AdminPostService) { }

  ngOnInit() {
   this.dataSource.paginator = this.paginator;
    this.dataService.getCategoryData().subscribe((data)=> this.dataSource.data = data.categoryList);
  
  }
  addCategory(){
    let pizzaArr:string[]=[];
    this.children.forEach(element => {
      pizzaArr.push(element.nativeElement.value)
   })
    let category: pizzaCategory = {
      name : this.cname,
      price : this.cprice,
      pizza : pizzaArr
    }

    this.adminService.addCategory(category).subscribe((data)=>alert("Category added successfully"),(error)=>alert("Some error occoured"));
// console.log(category);
  //  this.children.forEach(element => {
  //    console.log(element.nativeElement.value);
  //  });
  }

  addMorePizza(){
    this.pizzas.push("pizza"+this.pizzas.length);
  }

  removePizza(event){

  this.pizzas.pop()

 
    
  }

}

import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DataService } from '../../data.service';
import { MatTableDataSource, MatPaginator, MatInput } from '@angular/material';
import { pizzaCategory } from '../../models/pizzaCategory';
import { AdminService } from '../../admin-service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categoryList;
  displayedColumns = ['name','pizza','price','actions'];
  cname;
  cprice;
  pizzas=["pizza0"];

  @ViewChildren('matInput') children;


  dataSource = new MatTableDataSource<pizzaCategory>();


  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;


  constructor(private dataService:DataService , private adminService: AdminService) { }

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

    this.adminService.addCategory(category).subscribe((data)=>this.refreshPage(),(error)=>alert("Some error occoured"));
// console.log(category);
  //  this.children.forEach(element => {
  //    console.log(element.nativeElement.value);
  //  });
  
    this.cname=""
    this.cprice=""
    this.pizzas=[]
  
  }

  refreshPage(){
    console.log("Category Added")
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['admin/category']);
  // }); 
this.ngOnInit();
}

  addMorePizza(){
    this.pizzas.push("pizza"+this.pizzas.length);
  }

  removePizza(event){

  this.pizzas.pop()

 
    
  }

  deleteCategory(element){

  
    
   this.adminService.deleteCategory(element).subscribe((data)=>this.refreshPage(),(error)=>alert("Some error occoured"));
  }

}

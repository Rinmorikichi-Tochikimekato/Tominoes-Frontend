import { LoginComponent } from '../login/login.component';
import { Order } from '../models/Order';
import { Price } from '../models/Price';
import { GetOrderPrice } from '../models/GetOrderPrice';
import { pizzaCategory } from '../models/pizzaCategory';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToppingsModelList } from '../models/ToppingsModelList';
import { crustModelList } from '../models/crustModelList';
import { DataService } from '../data.service';
import { pizzaList } from '../models/pizzaList';
import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pizzaCat;
  public crustList;
  public toppingsList;
 public order;

  public selectedValue={pizza:["Select pizza"]};
  public selectedPizzaName=null;
  public selectedCrust=null;
  public selectedToppings=[];
  public pizzaName;

  
  public username: string;
  
  public tempArr: string[];
  
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  thirdFormGroup: FormsModule;

  constructor(private _dataService : DataService,private router: Router,private _formBuilder: FormBuilder) {
 
  }


  ngOnInit() {

    this._dataService.messageSource.subscribe(name => this.username = name);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this. _dataService.getCategoryData()
     .subscribe(data => this.pizzaCat = data.categoryList);
  
  
      this._dataService.getCrustData()
    .subscribe(data2 => this.crustList = data2.list);
    //console.log(this.crustList);

      this._dataService.getToppingsData()
    .subscribe(data3 => this.toppingsList = data3.list);
     //console.log(this.pizzaCat);
  
  }

 onSelect(){
 
 }
 Add_to_Cart(){
  //alert("Added To Cart");

    console.log("cart"); 
    var getOrderprice=new GetOrderPrice();
    
      getOrderprice.pizzaName=this.selectedPizzaName;
      getOrderprice.topings=this.selectedToppings;
      getOrderprice.crustName=this.selectedCrust.name;
      
      console.log(getOrderprice); 

      this._dataService.getOrderPrice(getOrderprice).
      subscribe(data4 => this.fetchOrderPrice(data4));

    //  this._dataService.getGST().subscribe(data5 => this.fetchgst(data5.list))
    // //  this._dataService.getGST().subscribe(data5 => this._dataService.gst=data5)
    // //  this._dataService.getGST().subscribe();

     
    }
    fetchgst(data)
    {
      this._dataService.gst=data;
     
      console.log(this._dataService.gst);
    }

    fetchOrderPrice(data4)
    {
      // this.order = data4;
      this._dataService.order=data4;
      console.log(this._dataService.order);
      this.router.navigate(['/payment']);
    }


   onChange(event,option){
     if(event.checked){
       this.selectedToppings.push(option);
     }else{
      this.selectedToppings = this.selectedToppings.filter( topping => { if(option !== topping){return true;}});
      }
      console.log(this.selectedToppings)
     
    }
     Payment_Page()
     {
      //  window.location="../";
     }
     

   }



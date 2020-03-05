import { UserModel } from './../models/UserModel';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import {User} from '../models/User'
import { HttpHeaders,HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _dataService : DataService,private router: Router) { }

public username: string;
password: string;
id:number;
 validateuser : UserModel;
 nameClass:User;

  ngOnInit() {

  }
 

  login() : void {
  
     this.nameClass = {
      name:this.username
    }

     this._dataService.getUserObject(this.nameClass).subscribe((data)=> this.loginValidate(data),(error)=>alert("error"));
    
  }
 
  loginValidate(data){
    this.validateuser = data;
    console.log(this.validateuser.username);
    if(this.username == "admin"  && this.password == "admin"){
      this.router.navigate(["admin"]);
     }else if(this.username == this.validateuser.username && this.password == this.validateuser.password){
      
      sessionStorage.setItem("id",this.validateuser.userId);
      sessionStorage.setItem("name",this.validateuser.username);
      
       this.router.navigate(["home"]);
     }
     else {
       alert("Invalid credentials");
     }

  }

  

 

  }

 
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
 user :User;



  ngOnInit() {
    this._dataService.messageSource.subscribe(name => this.username = name);
 
  
  }
 

  login() : void {
    this._dataService.changeName(this.username);
    console.log(this.username);
    
       let user:User = {
         name:this.username
       }
       console.log("sending object "+ user.name);
     this._dataService.getUserId(user).subscribe((data)=>this.abc(data));

    
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["admin"]);
    }else if(this.username == "user1" && this.password == "user1"){
      this.router.navigate(["home"]);
    }
    else {
      alert("Invalid credentials");
    }
   
    
  }
  abc(data){
    sessionStorage.setItem("id",data);

  }
  

 

  }

 
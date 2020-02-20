import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _dataService : DataService,private router: Router) { }
public username: string;
password: string;



  ngOnInit() {
    this._dataService.messageSource.subscribe(name => this.username = name);
  }

  login() : void {
    this._dataService.changeName(this.username);
    
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["admin"]);
    }else if(this.username == "user1" && this.password == "user1"){
      this.router.navigate(["home"]);
    }
    else {
      alert("Invalid credentials");
    }

    
  }

 

  }

 
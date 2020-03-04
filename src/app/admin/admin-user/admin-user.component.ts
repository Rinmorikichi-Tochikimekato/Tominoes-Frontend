import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from '../../data.service';
import { AdminService } from '../../admin-service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {


  dataSource = new MatTableDataSource<UserModel>();
  user: UserModel;
 
  username;
  password;
  displayedColumns = ['userId', 'username', 'password','actions'];
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private dataService: DataService, private adminService: AdminService) { }


  ngOnInit() {
   // this.dataSource.paginator = this.paginator;
        this.dataService.getUserData().subscribe((data) => this.dataSource.data = data.list);
        console.log(this.dataSource.data);
  }

  click() {
    this.user = {
      userId : null,
      username: this.username,
      password: this.password
    }
    this.adminService.addUser(this.user).subscribe((data) => this.ngOnInit(), (error) => console.log(error));
 
  }

  deleteUser(user){
    this.adminService.deleteUser(user).subscribe((data) => this.ngOnInit(), (error) => console.log(error));
  }
    
  

}

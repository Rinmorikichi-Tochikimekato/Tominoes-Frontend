import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-toolbar-logout',
  templateUrl: './toolbar-logout.component.html',
  styleUrls: ['./toolbar-logout.component.css']
})
export class ToolbarLogoutComponent implements OnInit {

  constructor(private _dataService:DataService) { }

  ngOnInit() {
  }
 

}

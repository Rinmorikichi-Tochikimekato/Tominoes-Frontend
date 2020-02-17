import { DataService } from './data.service';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatMenuModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


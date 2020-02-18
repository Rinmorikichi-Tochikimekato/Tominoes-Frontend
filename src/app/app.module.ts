
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatSidenavModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { AdminComponent } from './admin/admin.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminCrustComponent } from './admin/admin-crust/admin-crust.component';
import { AdminToppingComponent } from './admin/admin-topping/admin-topping.component'
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AdminOrderComponent,
    AdminCategoryComponent,
    AdminCrustComponent,
    AdminToppingComponent

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
    FormsModule,
    MatSidenavModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


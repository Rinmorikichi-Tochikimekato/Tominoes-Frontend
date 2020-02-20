
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule,MatPaginatorModule ,MatCardModule, MatButtonModule,MatInputModule,MatDividerModule, MatProgressSpinnerModule, MatSidenavModule, MatMenuModule,MatDialogModule, MatStepperModule, MatOptionModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { AdminComponent } from './admin/admin.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminCrustComponent } from './admin/admin-crust/admin-crust.component';
import { AdminToppingComponent } from './admin/admin-topping/admin-topping.component'
import { AdminPostService } from './admin-post.service';
import { OrderDetailsComponent } from './Payment/order-details/order-details.component';
import { PaymentDetailsComponent } from './Payment/payment-details/payment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AdminOrderComponent,
    AdminCategoryComponent,
    AdminCrustComponent,
    AdminToppingComponent,
    OrderDetailsComponent,
    PaymentDetailsComponent    

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
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [AdminPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }


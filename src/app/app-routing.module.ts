import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminCrustComponent } from './admin/admin-crust/admin-crust.component';
import { AdminToppingComponent } from './admin/admin-topping/admin-topping.component';
import { OrderDetailsComponent } from './Payment/order-details/order-details.component';
import { PaymentDetailsComponent } from './Payment/payment-details/payment-details.component';
import { AdminTaxComponent } from './admin/admin-tax/admin-tax.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'payment',component:OrderDetailsComponent},
  {path:'lastpage',component:PaymentDetailsComponent},

  {path:'home',component:HomeComponent},
  {
    path:'admin', 
    component:AdminComponent,
    children: [
      {
        path:'order',
        component:AdminOrderComponent
      },
      {
        path:'category',
        component:AdminCategoryComponent
      },
      {
        path:'crust',
        component:AdminCrustComponent
      },
      {
        path:'topping',
        component:AdminToppingComponent
      },
      {
        path:'tax',
        component:AdminTaxComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AdminComponent , AdminCategoryComponent, AdminOrderComponent, AdminCrustComponent, AdminToppingComponent, LoginComponent,AdminTaxComponent];
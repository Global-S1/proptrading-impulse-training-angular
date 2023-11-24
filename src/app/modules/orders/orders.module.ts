import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersDesktopComponent } from './components/orders-desktop/orders-desktop.component';
import { OrdersMobileComponent } from './components/orders-mobile/orders-mobile.component';


@NgModule({
  declarations: [OrdersComponent, OrdersDesktopComponent, OrdersMobileComponent],
  imports: [
    CommonModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }

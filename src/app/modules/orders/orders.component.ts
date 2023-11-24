import { Component } from '@angular/core';
import { PAGE_CONTENT_ORDERS } from './utils/constants';
import { IPAGE_CONTENT_ORDERS } from './utils/contanst.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  pageContent: IPAGE_CONTENT_ORDERS = PAGE_CONTENT_ORDERS
}

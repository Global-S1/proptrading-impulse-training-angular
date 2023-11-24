import { Component, Input } from '@angular/core';
import { IPAGE_CONTENT_ORDERS_MOBILE } from './utils/constants.interface';
import { PAGE_CONTENT_ORDERS_MOBILE } from './utils/constants';

@Component({
  selector: 'app-orders-mobile',
  templateUrl: './orders-mobile.component.html',
  styleUrls: ['./orders-mobile.component.scss']
})
export class OrdersMobileComponent {
  @Input() pageContent: IPAGE_CONTENT_ORDERS_MOBILE = PAGE_CONTENT_ORDERS_MOBILE
  details: boolean = false

  onDetails(){
    this.details = !this.details
  }
}

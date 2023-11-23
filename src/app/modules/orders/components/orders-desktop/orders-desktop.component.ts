import { Component, Input } from '@angular/core';
import { ITableOrders } from '../../utils/contanst.interface';

@Component({
  selector: 'app-orders-desktop',
  templateUrl: './orders-desktop.component.html',
  styleUrls: ['./orders-desktop.component.scss']
})
export class OrdersDesktopComponent {
  @Input() pageContent!: ITableOrders ;
}

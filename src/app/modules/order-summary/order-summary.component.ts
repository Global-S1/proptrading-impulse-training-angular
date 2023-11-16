import { Component } from '@angular/core';
import { constantsOrderSummary } from './utils/constants';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  infoTable!: {
    description: string;
    result: string;
  }[];

  constructor() {
    this.infoTable = constantsOrderSummary.summaryData;
  }
}

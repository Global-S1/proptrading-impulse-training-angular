import { Component } from '@angular/core';
import { constantsOrderSummary } from './utils/constants';
import { IOrderSummaryConstants, ISummaryData } from './interface/constants.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  constantsOS: IOrderSummaryConstants;
  infoTable!: ISummaryData[];

  targetDate: Date;

  constructor() {
    this.constantsOS = constantsOrderSummary
    this.infoTable = constantsOrderSummary.box.summaryData;

    this.targetDate = new Date();
    this.targetDate.setMinutes(this.targetDate.getMinutes() + 120);
  }
}

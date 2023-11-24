import { Component } from '@angular/core';
import { IPAGE_CONTENT_PROMOTION } from './utils/constants.interface';
import { PAGE_CONTENT_PROMOTION } from './utils/constants';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent {
  pageContent: IPAGE_CONTENT_PROMOTION = PAGE_CONTENT_PROMOTION
}

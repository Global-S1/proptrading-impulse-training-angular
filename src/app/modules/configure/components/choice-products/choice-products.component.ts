import { Component, Input } from '@angular/core';
import { IPRODUCTS } from '../../interface/products.interface';

@Component({
  selector: 'app-choice-products',
  templateUrl: './choice-products.component.html',
  styleUrls: ['./choice-products.component.scss']
})
export class ChoiceProductsComponent {
  @Input() products: IPRODUCTS[] = [];
}

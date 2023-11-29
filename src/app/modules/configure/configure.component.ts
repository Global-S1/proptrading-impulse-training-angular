import { Component } from '@angular/core';
import { PAGE_CONTENT_CONFIGURE } from './utils/constants'
import { IPAGE_CONTENT_CONFIGURE } from './utils/constants.interface';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent {
  pageContent: IPAGE_CONTENT_CONFIGURE = PAGE_CONTENT_CONFIGURE;

  chosenProduct: boolean = false;
  chosenModality: boolean = false

  productChoise() {
    this.chosenProduct = true
  }

  modalityChoise() {
    this.chosenModality = true
  }
}

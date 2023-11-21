import { Component } from '@angular/core';
import { PAGE_CONTENT_FOOTER } from './utils/constants'
import { IPAGE_CONTENT_FOOTER } from './utils/constants.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  pageContent: IPAGE_CONTENT_FOOTER = PAGE_CONTENT_FOOTER
}

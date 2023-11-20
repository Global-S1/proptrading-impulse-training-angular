import { Component } from '@angular/core';
import { CONSTANTS_FOOTER } from './utils/constants'
import { ICONSTANTS_FOOTER } from './utils/constants.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constants: ICONSTANTS_FOOTER = CONSTANTS_FOOTER
}

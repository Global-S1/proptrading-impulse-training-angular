import { Component, Input } from '@angular/core';
import { IOptions, options } from '../options-layout';

@Component({
  selector: 'app-options-layout',
  templateUrl: './options-layout.component.html',
  styleUrls: ['./options-layout.component.scss']
})
export class OptionsLayoutComponent {
  @Input() options: IOptions[] = options
}

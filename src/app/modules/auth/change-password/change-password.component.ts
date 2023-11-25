import { Component } from '@angular/core';
import { CONSTANTS_CHANGE_PASSWORD } from './utils/constants';
import { ICONSTANTS_CHANGE_PASSWORD } from './utils/constants.interface';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  pageContent: ICONSTANTS_CHANGE_PASSWORD = CONSTANTS_CHANGE_PASSWORD;
}

import { Component } from '@angular/core';
import { CONSTANTS_AUTH } from './utils/constants'
import { ICONSTANTS_AUTH } from './utils/constants.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authConstants: ICONSTANTS_AUTH = CONSTANTS_AUTH
}

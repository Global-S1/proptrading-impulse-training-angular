import { Component } from '@angular/core';
import { constantsLogin } from './utils/constants'
import { ICONSTANTS_LOGIN } from './utils/constants.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constants: ICONSTANTS_LOGIN = constantsLogin
}

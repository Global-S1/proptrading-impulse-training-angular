import { Component } from '@angular/core';
import { pageContent } from './utils/constants'
import { ICONSTANTS_LOGIN } from './utils/constants.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginConstants: ICONSTANTS_LOGIN = pageContent
}

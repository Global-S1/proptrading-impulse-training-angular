import { Component } from '@angular/core';
import { constantsLogin } from './utils/constants'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constantsL = constantsLogin
}

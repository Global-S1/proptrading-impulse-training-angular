import { Component } from '@angular/core';
import { PAGE_CONTENT_LOGIN } from './utils/constants'
import { IPAGE_CONTENT_LOGIN } from './utils/constants.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  pageContent: IPAGE_CONTENT_LOGIN = PAGE_CONTENT_LOGIN
}

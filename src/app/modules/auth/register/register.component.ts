import { Component } from '@angular/core';
import { constantsRegister } from './utils/constants';
import { ICONTANTS_REGISTER } from './utils/constants.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  pageContent: ICONTANTS_REGISTER = constantsRegister
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';



@NgModule({
  declarations: [LoginComponent, SocialLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginComponent, SocialLoginComponent],
})
export class LoginModule { }

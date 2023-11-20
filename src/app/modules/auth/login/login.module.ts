import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { CoreModule } from 'src/app/shared/core/core.module';



@NgModule({
  declarations: [LoginComponent, SocialLoginComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [LoginComponent, SocialLoginComponent],
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ChangePasswordModule } from './change-password/change-password.module';

@NgModule({
  declarations: [AuthComponent, FooterComponent],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    ChangePasswordModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

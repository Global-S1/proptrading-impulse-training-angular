import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResponseSuccessComponent } from './response-success/response-success.component';

@NgModule({
  declarations: [AuthComponent, FooterComponent, LoginComponent, RecoveryPasswordComponent, ChangePasswordComponent, ResponseSuccessComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AuthComponent, FooterComponent],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

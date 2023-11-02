import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from 'src/app/shared/core/core.module';

@NgModule({
  declarations: [AuthComponent, FooterComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

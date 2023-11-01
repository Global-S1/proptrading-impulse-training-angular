import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AuthComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

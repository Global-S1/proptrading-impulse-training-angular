import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { SocialRegisterComponent } from './components/social-register/social-register.component';



@NgModule({
  declarations: [RegisterComponent, SocialRegisterComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { RequirementsComponent } from './components/requirements/requirements.component';



@NgModule({
  declarations: [ChangePasswordComponent, RequirementsComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [ChangePasswordComponent]
})
export class ChangePasswordModule { }

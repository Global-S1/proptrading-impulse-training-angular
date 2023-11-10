import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { AtomsFormFieldModule } from './atoms-form-field/atoms-form-field.module';


@NgModule({
  declarations: [ButtonComponent , InputComponent],
  imports: [
    CommonModule,
    AtomsFormFieldModule
  ],
  exports: [ButtonComponent , InputComponent, AtomsFormFieldModule]
})
export class CoreModule { }

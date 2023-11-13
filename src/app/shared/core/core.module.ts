import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsFormFieldModule } from './atoms-form-field/atoms-form-field.module';
import { ButtonModule } from './atoms/button/button.module';
import { InputModule } from './atoms/input/input.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsFormFieldModule,
    ButtonModule,
    InputModule
  ],
  exports: [ButtonModule , InputModule, AtomsFormFieldModule]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldSelectModule } from './form-field-select/form-field-select.module';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { FormFieldInputModule } from './form-field-input/form-field-input.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormFieldSelectModule,
    FormFieldInputModule
  ],
  exports: [
    CommonModule,
    FormFieldSelectModule,
    FormFieldInputModule
  ]
})
export class AtomsFormFieldModule { }

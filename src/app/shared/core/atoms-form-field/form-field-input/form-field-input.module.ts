import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldInputComponent } from './form-field-input.component';
import { CoreModule } from '../../core.module';
import { InputModule } from '../../atoms/input/input.module';

@NgModule({
  declarations: [FormFieldInputComponent],
  imports: [CommonModule, InputModule],
  exports: [FormFieldInputComponent],
})
export class FormFieldInputModule {}

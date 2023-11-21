import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldSelectComponent } from './form-field-select.component';
import { SelectModule } from '../../atoms/select/select.module';

@NgModule({
  declarations: [FormFieldSelectComponent],
  imports: [CommonModule, SelectModule],
  exports: [FormFieldSelectComponent],
})
export class FormFieldSelectModule {}

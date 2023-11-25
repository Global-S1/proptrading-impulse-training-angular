import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss']
})
export class FormFieldSelectComponent {
  @Input() formData: string[] = [];
  @Input() label: string = '';

  constructor(){}



}

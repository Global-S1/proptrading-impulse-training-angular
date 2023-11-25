import { Component, Input, OnInit } from '@angular/core';
// import { InputField, SelectField } from 'src/app/modules/perfil-no-verify/constants.interface';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss']
})
export class FormFieldInputComponent {

  @Input() label: string = 'inicio';
  @Input() placeholder: string = '';
  @Input() custom: string = '';


  // ngOnInit(){
  //   this.data = this.data.filter((element)=>
  //   'title' in element &&
  //   'placeholder' in element &&
  //   'custom' in element &&
  //   typeof element.title === 'string' &&
  //   typeof element.placeholder === 'string' &&
  //   typeof element.custom === 'string'
  //   )
  //   console.log(this.data)
  // }

  // constructor(){
  //   this.data = this.data.filter((element)=>
  //   'title' in element &&
  //   'placeholder' in element &&
  //   'custom' in element &&
  //   typeof element.title === 'string' &&
  //   typeof element.placeholder === 'string' &&
  //   typeof element.custom === 'string'
  //   )
  //   console.log(this.data)
  // }


}

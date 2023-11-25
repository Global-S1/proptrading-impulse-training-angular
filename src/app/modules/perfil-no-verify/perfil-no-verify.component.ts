import { Component } from '@angular/core';
import { PAGE_CONTENT_PERFIL_NO_VERIFY } from './utils/constants'
import { IPAGE_CONTENT_PERFIL_NO_VERIFY } from './utils/constants.interface';
import { SelectField } from './interface/select-field.interface';
import { InputField } from './interface/input-field.interface';

@Component({
  selector: 'app-perfil-no-verify',
  templateUrl: './perfil-no-verify.component.html',
  styleUrls: ['./perfil-no-verify.component.scss']
})
export class PerfilNoVerifyComponent {
  constants: IPAGE_CONTENT_PERFIL_NO_VERIFY = PAGE_CONTENT_PERFIL_NO_VERIFY;

  isField(item: InputField | SelectField): item is InputField{
    return 'placeholder' in item
  }

  box1or2or3(num: number): string {
    const result = num + 1;

    if(result === 3) {
      return result/3 + ''
    }

    return result + ''
  }
}

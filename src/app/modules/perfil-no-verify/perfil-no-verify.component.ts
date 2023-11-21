import { Component } from '@angular/core';
import { contantsKYC } from './models/constants'

@Component({
  selector: 'app-perfil-no-verify',
  templateUrl: './perfil-no-verify.component.html',
  styleUrls: ['./perfil-no-verify.component.scss']
})
export class PerfilNoVerifyComponent {
  constants: any = contantsKYC
}

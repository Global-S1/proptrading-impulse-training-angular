import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-register',
  templateUrl: './social-register.component.html',
  styleUrls: ['./social-register.component.scss']
})
export class SocialRegisterComponent {
  @Input() src: string = ''
  @Input() alt: string = ''
}

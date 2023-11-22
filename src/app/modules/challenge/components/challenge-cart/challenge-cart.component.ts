import { Component, Input } from '@angular/core';
import { IBuyChallenge } from '../../interface/buy-challenge.interface';

@Component({
  selector: 'app-challenge-cart',
  templateUrl: './challenge-cart.component.html',
  styleUrls: ['./challenge-cart.component.scss']
})
export class ChallengeCartComponent {
  @Input() pageContent!: IBuyChallenge
}

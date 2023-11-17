import { Component } from '@angular/core';
import { constantsChallengeExtended } from './utils/constants';

@Component({
  selector: 'app-challenge-extended',
  templateUrl: './challenge-extended.component.html',
  styleUrls: ['./challenge-extended.component.scss']
})
export class ChallengeExtendedComponent {
  constantsChallenge;
  constantBoxCE;

  constructor() {
    this.constantsChallenge = constantsChallengeExtended
    this.constantBoxCE = constantsChallengeExtended.box
  }
}

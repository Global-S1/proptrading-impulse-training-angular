import { Component } from '@angular/core';
import { IPAGE_CONTENT_CHALLENGE } from './utils/constants.interface';
import { PAGE_CONTENT_CHALLENGE } from './utils/contants';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent {
  pageContent: IPAGE_CONTENT_CHALLENGE = PAGE_CONTENT_CHALLENGE
}

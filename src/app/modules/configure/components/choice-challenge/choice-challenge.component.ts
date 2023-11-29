import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choice-challenge',
  templateUrl: './choice-challenge.component.html',
  styleUrls: ['./choice-challenge.component.scss']
})
export class ChoiceChallengeComponent {
  @Input() options: string[] = [];
}

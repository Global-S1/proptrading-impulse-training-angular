import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-progress',
  templateUrl: './challenge-progress.component.html',
  styleUrls: ['./challenge-progress.component.scss']
})
export class ChallengeProgressComponent {
  @Input() text: [string, string] = ['', ''];
  @Input() value: number = 0;
  @Input() max: number = 100;
}

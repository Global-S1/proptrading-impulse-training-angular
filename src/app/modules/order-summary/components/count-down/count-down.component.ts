import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() targetDate!: Date;

  private destroy$ = new Subject<void>();
  countdownText!: string;

  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private startCountdown() {
    const countdown$: Observable<number> = timer(0, 1000).pipe(
      map(() => this.calculateTimeRemaining())
    );

    countdown$.pipe(takeUntil(this.destroy$)).subscribe((timeRemaining) => {
      this.countdownText = this.formatCountdown(timeRemaining);
    });
  }

  private calculateTimeRemaining(): number {
    const currentTime = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    return Math.max(0, Math.floor((targetTime - currentTime) / 1000));
  }

  private formatCountdown(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

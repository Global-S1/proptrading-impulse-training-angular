import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ThemeBtn } from '../theme.styles';
import { IOptionThemeBtn } from '../theme.styles.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() type:string = "button";
  @Input() text: string = "";
  @Input() theme!: IOptionThemeBtn;

  themeClassName!:string

  constructor() {}

  ngOnInit(): void {
    this.themeClassName = this.theme ? ThemeBtn[this.theme] : ThemeBtn.default;
  }
}

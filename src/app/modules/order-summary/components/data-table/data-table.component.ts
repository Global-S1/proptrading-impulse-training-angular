import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() description: string = "";
  @Input() result: string = "";
  src: string = "../../../assets/images/line.svg";
  alt: string = "line"

  constructor() {}
}

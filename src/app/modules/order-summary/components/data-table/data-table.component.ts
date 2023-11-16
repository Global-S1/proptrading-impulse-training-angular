import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  // @Input() infos!: { description: string, result: string };
  @Input() description: string = "";
  @Input() result: string = "";
  src: string = "../../../assets/images/line.svg";
  alt: string = "line"

  constructor() {
    // this.description = this.infos?.description !== '' ? this.infos.description : ''
    // this.result = this.infos?.result !== '' ? this.infos.result : ''
  }
}

import { Component } from '@angular/core';
import { IPAGE_CONTENT_RESPONSE_SUCCESS } from './utils/constants.interface';
import { PAGE_CONTENT_RESPONSE_SUCCESS } from './utils/constants';

@Component({
  selector: 'app-response-success',
  templateUrl: './response-success.component.html',
  styleUrls: ['./response-success.component.scss']
})
export class ResponseSuccessComponent {
  pageContent: IPAGE_CONTENT_RESPONSE_SUCCESS = PAGE_CONTENT_RESPONSE_SUCCESS
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';
import { CoreModule } from 'src/app/shared/core/core.module';



@NgModule({
  declarations: [OrderSummaryComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [OrderSummaryComponent]
})
export class OrderSummaryModule { }

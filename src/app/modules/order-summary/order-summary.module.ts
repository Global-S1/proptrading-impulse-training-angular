import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CountdownComponent } from './components/count-down/count-down.component';



@NgModule({
  declarations: [OrderSummaryComponent, DataTableComponent, CountdownComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [OrderSummaryComponent]
})
export class OrderSummaryModule { }

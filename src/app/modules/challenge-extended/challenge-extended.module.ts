import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeExtendedComponent } from './challenge-extended.component';
import { DataTableModule } from 'src/app/shared/core/atoms/data-table/data-table.module';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { CoreModule } from 'src/app/shared/core/core.module';


@NgModule({
  declarations: [ChallengeExtendedComponent, PaymentOptionsComponent],
  imports: [
    CommonModule,
    DataTableModule,
    CoreModule
  ],
  exports: [ChallengeExtendedComponent]
})
export class ChallengeExtendedModule { }

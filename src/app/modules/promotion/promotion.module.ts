import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { CoreModule } from 'src/app/shared/core/core.module';



@NgModule({
  declarations: [PromotionComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [PromotionComponent]
})
export class PromotionModule { }

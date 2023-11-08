import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/common/shared.module';
import { ChallengeComponent } from '../challenge/challenge.component';
import { MaskComponent } from './mask.component';
import { ChallengeCartComponent } from '../challenge/challenge-cart/challenge-cart.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ElevateComponent } from '../elevate/elevate.component';
import { PromotionComponent } from '../promotion/promotion.component';
import { OffersComponent } from '../offers/offers.component';



@NgModule({
  declarations: [MaskComponent, ChallengeComponent,
    ChallengeCartComponent, ElevateComponent, PromotionComponent,
    OffersComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [MaskComponent, ChallengeComponent,
    ChallengeCartComponent, ElevateComponent, PromotionComponent,
    OffersComponent]
})
export class MaskModule { }

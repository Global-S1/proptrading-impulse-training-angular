import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/common/shared.module';
import { ChallengeComponent } from '../challenge/challenge.component';
import { MaskComponent } from './mask.component';
import { ChallengeCartComponent } from '../challenge/components/challenge-cart/challenge-cart.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ElevateComponent } from '../elevate/elevate.component';
import { PromotionComponent } from '../promotion/promotion.component';
import { OffersComponent } from '../offers/offers.component';
import { PerfilNoVerifyModule } from '../perfil-no-verify/perfil-no-verify.module';
import { BuyChallengeComponent } from '../buy-challenge/buy-challenge.component';
import { OrderSummaryModule } from '../order-summary/order-summary.module';
import { ChallengeExtendedModule } from '../challenge-extended/challenge-extended.module';

@NgModule({
  declarations: [
    MaskComponent,
    ChallengeComponent,
    ChallengeCartComponent,
    ElevateComponent,
    PromotionComponent,
    OffersComponent,
    BuyChallengeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    PerfilNoVerifyModule,
    OrderSummaryModule,
    ChallengeExtendedModule,
  ],
  exports: [
    MaskComponent,
    ChallengeComponent,
    ChallengeCartComponent,
    ElevateComponent,
    PromotionComponent,
    OffersComponent,
    BuyChallengeComponent,
  ],
})
export class MaskModule {}

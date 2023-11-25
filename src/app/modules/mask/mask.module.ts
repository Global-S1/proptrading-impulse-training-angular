import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/common/shared.module';
import { ChallengeComponent } from '../challenge/challenge.component';
import { MaskComponent } from './mask.component';
import { ChallengeCartComponent } from '../challenge/components/challenge-cart/challenge-cart.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { PromotionComponent } from '../promotion/promotion.component';
import { OffersComponent } from '../offers/offers.component';
import { PerfilNoVerifyModule } from '../perfil-no-verify/perfil-no-verify.module';
import { BuyChallengeComponent } from '../buy-challenge/buy-challenge.component';
import { OrderSummaryModule } from '../order-summary/order-summary.module';
import { OrdersModule } from '../orders/orders.module';
import { ElevateModule } from '../elevate/elevate.module';
import { PromotionModule } from '../promotion/promotion.module';

@NgModule({
  declarations: [
    MaskComponent,
    ChallengeComponent,
    ChallengeCartComponent,
    OffersComponent,
    BuyChallengeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    PerfilNoVerifyModule,
    OrderSummaryModule,
    OrdersModule,
    ElevateModule,
    PromotionModule
  ],
  exports: [
    MaskComponent,
    ChallengeComponent,
    ChallengeCartComponent,
    ElevateModule,
    PromotionComponent,
    OffersComponent,
    BuyChallengeComponent,
  ],
})
export class MaskModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from '../challenge/challenge.component';
import { MaskComponent } from './mask.component';
import { ChallengeCartComponent } from '../challenge/challenge-cart/challenge-cart.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ElevateComponent } from '../elevate/elevate.component';



@NgModule({
  declarations: [MaskComponent, ChallengeComponent,
    ChallengeCartComponent, ElevateComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [MaskComponent, ChallengeComponent,
    ChallengeCartComponent, ElevateComponent]
})
export class MaskModule { }

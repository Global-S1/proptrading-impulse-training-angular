import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeComponent } from './challenge.component';
import { ChallengeCartComponent } from './components/challenge-cart/challenge-cart.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ChallengeProgressComponent } from './components/challenge-cart/components/challenge-progress/challenge-progress.component';



@NgModule({
  declarations: [ChallengeComponent, ChallengeCartComponent, RequirementsComponent, ChallengeProgressComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [ChallengeComponent]
})
export class ChallengeModule { }

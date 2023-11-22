import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskComponent } from './mask.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ChallengeModule } from '../challenge/challenge.module';



@NgModule({
  declarations: [MaskComponent],
  imports: [
    CommonModule,
    CoreModule,
    ChallengeModule
  ],
  exports: [MaskComponent]
})
export class MaskModule { }

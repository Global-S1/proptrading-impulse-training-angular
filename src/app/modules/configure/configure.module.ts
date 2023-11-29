import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigureComponent } from './configure.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ChoiceProductsComponent } from './components/choice-products/choice-products.component';
import { ChoiceChallengeComponent } from './components/choice-challenge/choice-challenge.component';
import { DataChoiceChallengeComponent } from './components/data-choice-challenge/data-choice-challenge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    ConfigureComponent,
    ChoiceProductsComponent,
    ChoiceChallengeComponent,
    DataChoiceChallengeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  exports: [ConfigureComponent],
})
export class ConfigureModule {}

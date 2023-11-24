import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevateComponent } from './elevate.component';
import { CoreModule } from 'src/app/shared/core/core.module';



@NgModule({
  declarations: [ElevateComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [ElevateComponent]
})
export class ElevateModule { }

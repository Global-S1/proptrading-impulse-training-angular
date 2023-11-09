import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OptionsLayoutComponent } from './layout/options-layout/options-layout.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [LayoutComponent, NavbarComponent, OptionsLayoutComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [LayoutComponent, NavbarComponent, OptionsLayoutComponent]
})
export class SharedModule { }

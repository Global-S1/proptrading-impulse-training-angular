import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OptionsLayoutComponent } from './layout/options-layout/options-layout.component';



@NgModule({
  declarations: [LayoutComponent, NavbarComponent, OptionsLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent, NavbarComponent, OptionsLayoutComponent]
})
export class SharedModule { }

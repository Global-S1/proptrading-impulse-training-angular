import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { MaskModule } from './modules/mask/mask.module';
import { SharedModule } from './shared/common/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MaskModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

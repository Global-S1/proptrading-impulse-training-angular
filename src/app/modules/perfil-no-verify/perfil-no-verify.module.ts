import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilNoVerifyComponent } from './perfil-no-verify.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';



@NgModule({
  declarations: [PerfilNoVerifyComponent, FileUploaderComponent],
  imports: [
    CommonModule, CoreModule
  ],
  exports: [PerfilNoVerifyComponent]
})
export class PerfilNoVerifyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilNoVerifyComponent } from './perfil-no-verify.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { CoreModule } from 'src/app/shared/core/core.module';

@NgModule({
  declarations: [PerfilNoVerifyComponent, FileUploaderComponent],
  imports: [CommonModule, CoreModule],
  exports: [PerfilNoVerifyComponent, FileUploaderComponent]
})
export class PerfilNoVerifyModule {}

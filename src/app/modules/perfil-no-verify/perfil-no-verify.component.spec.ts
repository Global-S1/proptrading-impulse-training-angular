import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNoVerifyComponent } from './perfil-no-verify.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { PerfilNoVerifyModule } from './perfil-no-verify.module';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('PerfilNoVerifyComponent', () => {
  let component: PerfilNoVerifyComponent;
  let fixture: ComponentFixture<PerfilNoVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilNoVerifyComponent],
      imports: [CoreModule, PerfilNoVerifyModule, FormsModule]
    });
    fixture = TestBed.createComponent(PerfilNoVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle checkbox changes, when you selected', () => {
    const checkboxInput: HTMLInputElement = fixture.nativeElement.querySelector('app-input[type="checkbox"] input[type="checkbox"]');

    expect(checkboxInput.checked).toBe(false);

    checkboxInput.click();
    fixture.detectChanges();

    expect(checkboxInput.checked).toBe(true);
  });

  it('should handle button click event, when you selected', () => {
    const paragraph = fixture.debugElement.query(By.css('.paragraph'));

    const description = [
      'Se admiten solo imágenes de los siguientes formatos: .jpeg, .jpg, .png, así como docuemntos en .pdf, peso máximo de los mismos 5MB',
    ].join("")

    expect(paragraph.nativeNode.innerText.trim()).toBe(description)
  });
});

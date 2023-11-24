import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { ChangePasswordModule } from './change-password.module';

fdescribe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [CoreModule, ChangePasswordModule]
    });
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title "Cambia tu contraseña", when initializing', () => {
    const titleElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Cambia tu contraseña');
  });

  it('should display three password input fields, when initializing', () => {
    const inputElements: NodeListOf<HTMLInputElement> = fixture.nativeElement.querySelectorAll('app-input input');
    expect(inputElements.length).toBe(3);

    const placeholderTexts = [
      'Ingresa tu contraseña',
      'Ingresa tu nueva contraseña',
      'Confirma tu contraseña',
    ];

    for (let i = 0; i < inputElements.length; i++) {
      expect(inputElements[i].placeholder).toBe(placeholderTexts[i]);
    }
  });

  it('should display a button with text "Empíeza", when initializing', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Empíeza');
  });

  it('should display four "requirements", when initializing', () => {
    const checkElements: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('.text-requirements');
    expect(checkElements.length).toBe(4);

    const expectedTexts = [
      'Entre 5 a 20 caracteres',
      'Al menos una mayúscula',
      'Al menos una minúscula',
      'Al menos una número',
    ];

    for (let i = 0; i < checkElements.length; i++) {
      expect(checkElements[i].textContent).toContain(expectedTexts[i]);
    }
  });
});

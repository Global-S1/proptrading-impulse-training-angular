import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordComponent],
      imports: [CoreModule]
    });
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "Cambia tu contraseña"', () => {
    const titleElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Cambia tu contraseña');
  });

  it('should have three password input fields', () => {
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

  it('should have a button with text "Empíeza"', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Empíeza');
  });

  it('should have four password strength check items', () => {
    const checkElements: NodeListOf<HTMLDivElement> = fixture.nativeElement.querySelectorAll('div img + span');
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

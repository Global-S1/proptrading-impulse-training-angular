import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [CoreModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a registration button with text "Regístrate"', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Regístrate');
  });

  it('should have a link to initiate login', () => {
    const loginLink: HTMLAnchorElement = fixture.nativeElement.querySelector('span a');
    expect(loginLink).toBeTruthy();
    expect(loginLink.href).toContain(''); // Add the actual href once it is defined
  });

  it('should have input elements for name, surname, gender, DNI, email, phone, country, and city', () => {
    const inputElements: NodeListOf<HTMLInputElement> = fixture.nativeElement.querySelectorAll('app-input input');
    expect(inputElements.length).toBe(8);

    const placeholderTexts = [
      'Ingresa tu(s) nombre(s)',
      'Ingresa tu(s) apellido(s)',
      'ESTE TIENE QUE SER UN SELECT',
      'Ingresa su número de DNI',
      'Ingresa tu dirección de email',
      'Ingrese su teléfono',
      'SELECT',
      'Ingresa tu ciudad',
    ];

    for (let i = 0; i < inputElements.length; i++) {
      expect(inputElements[i].placeholder).toBe(placeholderTexts[i]);
    }
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { RegisterModule } from './register.module';
import { By } from '@angular/platform-browser';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [CoreModule, RegisterModule],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Regístrate", when "app-button" is presented', () => {
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('Regístrate');
  });

  it('should display anchor "Inicia tu sesión", when initializing', () => {
    const loginLink: HTMLAnchorElement =
      fixture.nativeElement.querySelector('.ask');
    expect(loginLink).toBeTruthy();
    expect(loginLink.textContent).toContain("Inicia tu sesión");
  });

  it('should display the "options", when they are sent', () => {
    const selectFormField = fixture.debugElement.query(
      By.css('.form-field-select')
    );

    const selectDOM =
      selectFormField.nativeNode.__ng_debug__.children[1].nativeNode
        .__ng_debug__.children[0].nativeElement;

    const optionsSelectDOM = selectDOM.querySelectorAll('option');

    const placeholderTexts = {
      name: 'Genero',
      options: ['Seleccionar', 'Femenino', 'Masculino'],
    };

    for (let i = 0; i < optionsSelectDOM.length; i++) {
      expect(optionsSelectDOM[i].textContent).toBe(placeholderTexts.options[i]);
    }
  });
});

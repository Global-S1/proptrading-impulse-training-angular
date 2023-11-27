import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { LoginModule } from './login.module';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [LoginModule],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Ingresa a tu cuenta" in login, when the view starts', () => {
    const headingElement = fixture.debugElement.query(
      By.css('h2')
    ).nativeElement;
    expect(headingElement.textContent).toContain('Ingresa a tu cuenta');
  });

  it('should display three social login icons, when the view starts', () => {
    const socialIcons = fixture.debugElement.queryAll(
      By.css('app-social-login')
    );
    expect(socialIcons.length).toBe(3);
  });

  it('should display email input field, when the view starts', () => {
    const emailInput = fixture.debugElement.query(
      By.css('input[type="text"]')
    ).nativeElement;
    expect(emailInput).toBeTruthy();
  });

  it('should display password input field, when the view starts', () => {
    const passwordInput = fixture.debugElement.query(
      By.css('input[type="password"]')
    ).nativeElement;
    expect(passwordInput).toBeTruthy();
  });

  it('should display "¿Olvidaste tu contraseña?" link, when the view starts', () => {
    const forgotPasswordLink = fixture.debugElement.query(
      By.css('a')
    ).nativeElement;
    expect(forgotPasswordLink.textContent).toContain(
      '¿Olvidaste tu contraseña?'
    );
  });

  it('should display login button with text "INICIAR SESIÓN", when the view starts', () => {
    const loginButton = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(loginButton.textContent).toContain('INICIAR SESIÓN');
  });

  it('should display "¿No tienes cuenta aún?" the span, when you deliver by constants their value', () => {
    const registerLink = fixture.debugElement.query(
      By.css('.ask')
    ).nativeElement;

    expect(registerLink.textContent).toContain('¿No tienes cuenta aún?');
    expect(registerLink.textContent).toContain('Registrate');
  });
});

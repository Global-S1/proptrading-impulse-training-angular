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

  it('should display the login heading', () => {
    const headingElement = fixture.debugElement.query(
      By.css('h2')
    ).nativeElement;
    expect(headingElement.textContent).toContain('Ingresa a tu cuenta');
  });

  it('should have three social login icons', () => {
    const socialIcons = fixture.debugElement.queryAll(
      By.css('app-social-login')
    );
    expect(socialIcons.length).toBe(3);
  });

  it('should display email input field', () => {
    const emailInput = fixture.debugElement.query(
      By.css('input[type="text"]')
    ).nativeElement;
    expect(emailInput).toBeTruthy();
  });

  it('should display password input field', () => {
    const passwordInput = fixture.debugElement.query(
      By.css('input[type="password"]')
    ).nativeElement;
    expect(passwordInput).toBeTruthy();
  });

  it('should display "Forgot your password?" link', () => {
    const forgotPasswordLink = fixture.debugElement.query(
      By.css('a')
    ).nativeElement;
    expect(forgotPasswordLink.textContent).toContain(
      '¿Olvidaste tu contraseña?'
    );
  });

  it('should display login button', () => {
    const loginButton = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    expect(loginButton.textContent).toContain('INICIAR SESIÓN');
  });

  it('should display "Don\'t have an account? Register" link, when you deliver by constants their value', () => {
    const registerLink = fixture.debugElement.query(
      By.css('.ask')
    ).nativeElement;

    expect(registerLink.textContent).toContain('¿No tienes cuenta aún?');
    expect(registerLink.textContent).toContain('Registrate');
  });
});

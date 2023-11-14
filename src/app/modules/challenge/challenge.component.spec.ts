import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeComponent } from './challenge.component';
import { By } from '@angular/platform-browser';
import { MaskModule } from '../mask/mask.module';

fdescribe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeComponent],
      imports: [MaskModule]
    });
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the login heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(headingElement.textContent).toBe('Tus desafíos');
  });

  it('should have three social login icons', () => {
    const socialIcons = fixture.debugElement.queryAll(By.css('img'));
    expect(socialIcons.length).toBe(8);
  });

  it('should display "Ver Credenciales" link', () => {
    const forgotPasswordLink = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(forgotPasswordLink.textContent).toContain('Ver Credenciales');
  });

  it('should display login button', () => {
    const loginButton = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(loginButton.textContent).toContain('VER MAS EN ANALYZER');
  });

});

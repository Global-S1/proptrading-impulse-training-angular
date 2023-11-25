import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginComponent } from './social-login.component';

describe('SocialLoginComponent', () => {
  let component: SocialLoginComponent;
  let fixture: ComponentFixture<SocialLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialLoginComponent],
    });
    fixture = TestBed.createComponent(SocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a change of variables, when a change of arguments happens', () => {
    const imgElement = document.querySelector('img');

    expect((imgElement as HTMLImageElement).src).toBe('http://localhost:9876/');
    expect((imgElement as HTMLImageElement).alt).toBe('undefined');

    const imagenTest = {
      src: 'assets/icons/check.png',
      alt: 'check',
    };

    (imgElement as HTMLImageElement).src = imagenTest.src;
    (imgElement as HTMLImageElement).alt = imagenTest.alt;
    fixture.detectChanges();

    expect((imgElement as HTMLImageElement).src).toBe(
      'http://localhost:9876/assets/icons/check.png'
    );
    expect((imgElement as HTMLImageElement).alt).toBe('check');
  });
});

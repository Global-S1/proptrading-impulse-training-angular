import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

fdescribe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('That the logo is the right one', () => {
    const logoElement = fixture.nativeElement.querySelector('img');
    expect(logoElement.getAttribute('src')).toBe('../../assets/Vector.png');
  });

  it('Page title', () => {
    const h2Element = fixture.nativeElement.querySelector('h2');
    expect(h2Element.textContent).toBe('Que el dinero no sea un impedimento');
  });
});

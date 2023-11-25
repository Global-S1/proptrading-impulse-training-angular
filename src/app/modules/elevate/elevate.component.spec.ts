import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevateComponent } from './elevate.component';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('ElevateComponent', () => {
  let component: ElevateComponent;
  let fixture: ComponentFixture<ElevateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElevateComponent],
      imports: [CoreModule]
    });
    fixture = TestBed.createComponent(ElevateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading with text "Configuración del torneo"', () => {
    const headingElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toContain('Configuración del torneo');
  });

  it('should have a checkbox for data usage acceptance', () => {
    const checkboxElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input[type="checkbox"]');
    expect(checkboxElement).toBeTruthy();
  });

  it('should have a button with text "INGRESA AL TORNEO"', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('INGRESA AL TORNEO');
  });

});

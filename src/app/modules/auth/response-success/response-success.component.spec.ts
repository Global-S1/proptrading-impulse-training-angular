import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSuccessComponent } from './response-success.component';

fdescribe('ResponseSuccessComponent', () => {
  let component: ResponseSuccessComponent;
  let fixture: ComponentFixture<ResponseSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseSuccessComponent]
    });
    fixture = TestBed.createComponent(ResponseSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an image with alt text "image-success", when initialized', () => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.alt).toBe('image-success');
  });

  it('should display a heading with text "¡Bienvenido!", when initialized', () => {
    const headingElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toContain('¡Bienvenido!');
  });

  it('should have a paragraph with the expected content, when initialized', () => {
    const paragraphElement: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(paragraphElement).toBeTruthy();
    const expectedContent = '¡Tu registro se ha realizado exitosamente! Solo falta que realices un último paso: ingrese a la casilla de tu email de registro y verifique su cuenta con el email que le acabamos de enviar.';
    expect(paragraphElement.textContent?.trim()).toContain(expectedContent);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionComponent } from './promotion.component';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('PromotionComponent', () => {
  let component: PromotionComponent;
  let fixture: ComponentFixture<PromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionComponent],
      imports: [CoreModule]
    });
    fixture = TestBed.createComponent(PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image with alt text "ticket"', () => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.alt).toBe('ticket');
  });

  it('should have a heading with text "Cuenta Promocional"', () => {
    const headingElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h3');
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toContain('Cuenta Promocional');
  });

  it('should have a paragraph with promotional code instructions', () => {
    const paragraphElement: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(paragraphElement).toBeTruthy();
    expect(paragraphElement.textContent).toContain('Ingresa el código promocional que te fue brindado para obtener tu desafío');
  });


  it('should have a button with text "VALIDAR CÓDIGO" and theme "pagePromotion"', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('VALIDAR CÓDIGO');
    expect(buttonElement.getAttribute('theme')).toBe('pagePromotion');
  });
});

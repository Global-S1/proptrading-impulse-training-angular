import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersComponent } from './offers.component';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('OffersComponent', () => {
  let component: OffersComponent;
  let fixture: ComponentFixture<OffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersComponent],
      imports: [CoreModule]
    });
    fixture = TestBed.createComponent(OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div containing challenge information', () => {
    const challengeDiv: HTMLDivElement = fixture.nativeElement.querySelector('div > div');
    expect(challengeDiv).toBeTruthy();

    const headingElement: HTMLHeadingElement = fixture.nativeElement.querySelector('h3');
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toContain('Comprar ticket Elevate');

    const paragraphElement: HTMLParagraphElement = fixture.nativeElement.querySelector('p');
    expect(paragraphElement).toBeTruthy();
    expect(paragraphElement.textContent).toContain('Ingresa el código promocional que te fue brindado para obtener tu desafío');

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('app-button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toContain('COMPRAR TICKET');
    expect(buttonElement.getAttribute('theme')).toBe('pagePromotion');
  });

  it('should have an image with alt text "offers"', () => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.alt).toBe('offers');
  });
});

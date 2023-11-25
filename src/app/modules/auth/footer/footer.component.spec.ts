import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the copyright text', () => {
    const copyrightElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(copyrightElement.textContent).toContain('© Impulse World 2023. Todos los derechos reservados.');
  });

  it('should have the correct number of links', () => {
    const linkElements = fixture.debugElement.queryAll(By.css('a'));
    expect(linkElements.length).toBe(3);
  });

  it('should have the correct href attribute for each link', () => {
    const linkElements = fixture.debugElement.queryAll(By.css('a'));

    const expectedHrefs = [
      'https://impulseworld.pro/',
      'https://impulseworld.pro/desafios/',
      'https://impulseworld.pro/terminos-y-condiciones/',
    ];

    linkElements.forEach((link, index) => {
      const hrefAttribute = link.nativeElement.getAttribute('href');
      expect(hrefAttribute).toBe(expectedHrefs[index]);
    });
  });

  it('should open links in a new tab', () => {
    const linkElements = fixture.debugElement.queryAll(By.css('a'));

    linkElements.forEach((link) => {
      const targetAttribute = link.nativeElement.getAttribute('target');
      expect(targetAttribute).toBe('_blank');
    });
  });
});

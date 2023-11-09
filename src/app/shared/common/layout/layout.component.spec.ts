import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared.module';

fdescribe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking that the images of the first element are correct.', () => {

    const imgs = fixture.nativeElement.querySelectorAll('.img-head-impulse img');
    expect(imgs.length).toBe(2);

    const pathImg = ["../../../../assets/logo.png", "../../../../assets/images/line.svg"]

    imgs.forEach((elemento: any, index: number) => {
      const imgSrc = elemento.getAttribute('src');
      expect(pathImg[index]).toEqual(imgSrc)
    })
  });

  it('should contain the correct content in the "cart" div', () => {
    const cartElement = fixture.nativeElement.querySelector('.cart');
    const boldText = cartElement.querySelector('b').textContent;
    const paragraphText = cartElement.querySelector('p').textContent;

    expect(boldText).toBe('Conoce');
    expect(paragraphText).toBe('Conoce nuestra aplicación móvil.');
  });
});

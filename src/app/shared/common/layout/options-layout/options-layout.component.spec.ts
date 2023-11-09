import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLayoutComponent } from './options-layout.component';

describe('OptionsLayoutComponent', () => {
  let component: OptionsLayoutComponent;
  let fixture: ComponentFixture<OptionsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsLayoutComponent],
    });
    fixture = TestBed.createComponent(OptionsLayoutComponent);
    component = fixture.componentInstance;

    component.options = [
      {
        id: 1,
        text: 'Option 1',
        src: 'path/to/image1.jpg',
        alt: 'Image 1',
        values: ['Value 1', 'Value 2'],
      },
      { id: 2, text: 'Option 2', src: 'path/to/image2.jpg', alt: 'Image 2' },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render options correctly', () => {
    const optionElements = fixture.nativeElement.querySelectorAll('.circle');

    expect(optionElements.length).toBe(component.options.length);

    const firstOptionImgSrc = optionElements[0]
      .querySelector('img')
      .getAttribute('src');
    const secondOptionText =
      fixture.nativeElement.querySelector('strong').textContent;

    expect(firstOptionImgSrc).toContain('path/to/image1.jpg');
    expect(secondOptionText).toBe('Option 1');
  });

  it('image arrow of tag details', () => {
    const imgDetails = fixture.nativeElement.querySelector("details img");

    // función que entrega una ruta relativa
    function formaterUrl(url: string){
      const separate = url.split('/');
      const findAssest = separate.findIndex((text: string) => text === "assets");

      return separate.splice(findAssest).join("/")
    }

    expect(formaterUrl(imgDetails.src)).toEqual("assets/options/arrow.svg")
  });

  it('should show details when option has values', () => {
    const detailsElement = fixture.nativeElement.querySelector('details');
    expect(detailsElement).toBeTruthy();

    component.options[0].values = ['Value 1', 'Value 2'];
    fixture.detectChanges();

    const summaryText = detailsElement.querySelector('summary strong').textContent;
    expect(summaryText).toBe('Option 1');


    const optionsText = detailsElement.querySelectorAll('ul li');
    optionsText.forEach((value: any, index: number) => {
      expect(value.textContent).toEqual(component.options[0].values?.[index])
    })

  });
});

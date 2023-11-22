import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsComponent } from './requirements.component';

describe('RequirementsComponent', () => {
  let component: RequirementsComponent;
  let fixture: ComponentFixture<RequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementsComponent]
    });
    fixture = TestBed.createComponent(RequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label, when shared for contants', () => {
    const testLabel = 'Test Label';
    component.label = testLabel;
    fixture.detectChanges();

    const spanElement = fixture.nativeElement.querySelector('span');
    expect(spanElement.textContent).toBe(testLabel);
  });

  it('should display the correct image source and alt attribute, when shared for contants', () => {
    const testSrc = '../../../assets/icons/check.png';
    const testAlt = 'image-success';

    component.label = 'Test Label';
    fixture.detectChanges();

    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.getAttribute('src')).toContain(testSrc);
    expect(imgElement.getAttribute('alt')).toBe(testAlt);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsComponent } from './requirements.component';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('RequirementsComponent', () => {
  let component: RequirementsComponent;
  let fixture: ComponentFixture<RequirementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequirementsComponent],
      imports: [CoreModule]
    });
    fixture = TestBed.createComponent(RequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct text, when you give a constant', () => {
    const newText = 'Testing Text';
    component.text = newText;
    fixture.detectChanges();

    const spanElement = fixture.nativeElement.querySelector('span');
    expect(spanElement.textContent).toBe(newText);
  });

  it('should display the link, when you give it to them', () => {
    const newSrc = 'http://localhost:9876/assets/icons/check-sin-fondo.png';

    fixture.detectChanges();

    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(newSrc);
  });
});

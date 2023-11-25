import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test at type', () => {
    const inputElement = document.querySelector('input');
    expect(inputElement?.type).toBe("text");

    (inputElement as HTMLInputElement).type = "file";
    fixture.detectChanges();

    expect(inputElement?.type).toBe("file");
  });
});

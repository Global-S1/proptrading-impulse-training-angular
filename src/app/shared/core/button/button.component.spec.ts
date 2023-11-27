import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test at dinamic text ', () => {
    const btnElement = document.querySelector('button');

    (btnElement as HTMLButtonElement).textContent = "Probando botón";
    fixture.detectChanges();

    expect(btnElement?.textContent).toBe("Probando botón");
  });

  it('test at type', () => {
    const btnElement = document.querySelector('button');
    expect(btnElement?.type).toBe("submit");

    (btnElement as HTMLButtonElement).type = "button";
    fixture.detectChanges();

    expect(btnElement?.type).toBe("button");
  });
});

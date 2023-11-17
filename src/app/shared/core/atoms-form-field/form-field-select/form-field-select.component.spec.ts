import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldSelectComponent } from './form-field-select.component';

describe('FormFieldSelectComponent', () => {
  let component: FormFieldSelectComponent;
  let fixture: ComponentFixture<FormFieldSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldSelectComponent]
    });
    fixture = TestBed.createComponent(FormFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

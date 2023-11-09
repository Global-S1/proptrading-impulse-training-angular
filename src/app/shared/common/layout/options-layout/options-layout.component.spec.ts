import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLayoutComponent } from './options-layout.component';

describe('OptionsLayoutComponent', () => {
  let component: OptionsLayoutComponent;
  let fixture: ComponentFixture<OptionsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsLayoutComponent]
    });
    fixture = TestBed.createComponent(OptionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

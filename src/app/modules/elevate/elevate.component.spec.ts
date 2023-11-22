import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevateComponent } from './elevate.component';

describe('ElevateComponent', () => {
  let component: ElevateComponent;
  let fixture: ComponentFixture<ElevateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElevateComponent]
    });
    fixture = TestBed.createComponent(ElevateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSuccessComponent } from './response-success.component';

describe('ResponseSuccessComponent', () => {
  let component: ResponseSuccessComponent;
  let fixture: ComponentFixture<ResponseSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseSuccessComponent]
    });
    fixture = TestBed.createComponent(ResponseSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

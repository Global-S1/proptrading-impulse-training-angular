import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMobileComponent } from './orders-mobile.component';

describe('OrdersMobileComponent', () => {
  let component: OrdersMobileComponent;
  let fixture: ComponentFixture<OrdersMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersMobileComponent]
    });
    fixture = TestBed.createComponent(OrdersMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

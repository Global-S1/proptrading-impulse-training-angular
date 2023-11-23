import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDesktopComponent } from './orders-desktop.component';

describe('OrdersDesktopComponent', () => {
  let component: OrdersDesktopComponent;
  let fixture: ComponentFixture<OrdersDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersDesktopComponent]
    });
    fixture = TestBed.createComponent(OrdersDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

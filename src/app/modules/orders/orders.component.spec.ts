import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { OrdersModule } from './orders.module';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      imports: [OrdersModule]
    });
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display page content, when I give constanst title, paragraph, table', () => {
    const title = 'Test Title';
    const paragraph = 'Test Paragraph';
    const table = { headers: [], body: [] };

    component.pageContent = { title, paragraph, table };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(title);
    expect(compiled.querySelector('p').textContent).toContain(paragraph);
  });

  it('should display the correct class for OrdersDesktopComponent, when initializing', () => {
    const ordersDesktopComponent = fixture.debugElement.nativeElement.querySelector('app-orders-desktop');
    expect(ordersDesktopComponent.getAttribute('class')).toContain('orders-desktop');
  });

  it('should have the correct class for OrdersMobileComponent, when initializing', () => {
    const ordersMobileComponent = fixture.debugElement.nativeElement.querySelector('app-orders-mobile');
    expect(ordersMobileComponent.getAttribute('class')).toContain('orders-mobile');
  });
});

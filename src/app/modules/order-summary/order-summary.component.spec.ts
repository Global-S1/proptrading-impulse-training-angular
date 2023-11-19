import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { OrderSummaryModule } from './order-summary.module';

fdescribe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSummaryComponent],
      imports: [CoreModule, OrderSummaryModule]
    });
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display order summary table', () => {
    component.infoTable = [{ description: 'Description 1', result: 'Result 1' }];
    fixture.detectChanges();

    const dataTable = fixture.debugElement.nativeElement.querySelector('app-data-table');
    expect(dataTable).toBeTruthy();
  });

  it('should render QR code image', () => {
    const qrCodeImage = fixture.debugElement.nativeElement.querySelector('img[alt="QR"]');
    expect(qrCodeImage).toBeTruthy();

    const imgQR = qrCodeImage.src.split("/") // Esto me dará un arreglo de la ruta que se encuentra separado por "/"
    expect(imgQR[imgQR.length - 1]).toEqual('QRcoinpayments.png');
  });

  it('should render payment method change link', () => {
    const changeMethodLink = fixture.debugElement.nativeElement.querySelector('.change-method-payment b a');
    expect(changeMethodLink.textContent).toContain('Escoge otro método de pago');
  });

});

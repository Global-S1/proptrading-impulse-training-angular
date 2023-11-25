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

  it('should display headers correctly, when I give constant', () => {
    const headers = ['Header 1', 'Header 2', 'Header 3'];
    component.pageContent = { headers, body: [] };
    fixture.detectChanges();

    const thElements = fixture.nativeElement.querySelectorAll('.head');
    expect(thElements.length).toEqual(headers.length);

    thElements.forEach((th: any, index: number) => {
      expect(th.textContent.trim()).toEqual(headers[index]);
    });
  });

  it('should display body data correctly, when I give constant', () => {
    const bodyData = [
      { Id: 1, challenge: 'Challenge 1', state: { src: 'icon1.png', alt: 'Icon 1', text: 'State 1' }, amount: 100, currency: 'USD', date: '2023-01-01', action: { src: 'action1.png', alt: 'Action 1', text: 'Ver credenciales' } },
    ];

    component.pageContent = { headers: [], body: bodyData };
    fixture.detectChanges();

    const trElements = fixture.nativeElement.querySelectorAll('.table-row-desktop');
    expect(trElements.length).toEqual(bodyData.length);

    trElements.forEach((tr: any, index: number) => {
      const rowData = bodyData[index];
      const tdElements = tr.querySelectorAll('td');

      expect(tdElements[0].textContent.trim()).toEqual(rowData.Id.toString());
      expect(tdElements[1].textContent.trim()).toEqual(rowData.challenge);
      expect(tdElements[3].textContent.trim()).toEqual(rowData.amount.toString());
      expect(tdElements[4].textContent.trim()).toEqual(rowData.currency);
      expect(tdElements[5].textContent.trim()).toEqual(rowData.date);

      const imgElement = tdElements[2].querySelector('img');
      expect(imgElement.getAttribute('src')).toEqual(rowData.state.src);
      expect(imgElement.getAttribute('alt')).toEqual(rowData.state.alt);

      expect(tdElements[2].textContent.trim()).toContain(rowData.state.text);

      if (rowData.action.text === 'Ver credenciales') {
        const actionImgElement = tdElements[6].querySelector('img');
        expect(actionImgElement.getAttribute('src')).toEqual(rowData.action.src);
        expect(actionImgElement.getAttribute('alt')).toEqual(rowData.action.alt);

        const actionLinkElement = tdElements[6].querySelector('a');
        expect(actionLinkElement.textContent.trim()).toEqual(rowData.action.text);
      } else if (['Verificar', 'Pagar'].includes(rowData.action.text)) {
        const actionImgElement = tdElements[6].querySelector('img');
        expect(actionImgElement.getAttribute('src')).toEqual(rowData.action.src);
        expect(actionImgElement.getAttribute('alt')).toEqual(rowData.action.alt);

        expect(tdElements[6].textContent.trim()).toContain(rowData.action.text);
      }
    });
  });
});

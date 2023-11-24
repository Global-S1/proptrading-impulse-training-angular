import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMobileComponent } from './orders-mobile.component';

fdescribe('OrdersMobileComponent', () => {
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

  it('should display headers correctly, when I give constants headers', () => {

    component.pageContent = { headers: ['Header 1', 'Header 2', 'Header 3'], body: [] };
    fixture.detectChanges();

    const thElements = fixture.nativeElement.querySelectorAll('.head');
    expect(thElements.length).toEqual(component.pageContent.headers.length);

    thElements.forEach((th: any, index: number) => {
      expect(th.textContent.trim()).toEqual(component.pageContent.headers[index]);
    });
  });

  it('should display body data correctly, when I give constants', () => {
    const bodyData = [
      {
        date: '2023-01-01',
        description: 'Description 1',
        iconStatus: { src: 'icon1.png', alt: 'Icon 1' },
        data: [
          { concept: 'Concept 1', value: 'Value 1' },
          { concept: 'Concept 2', icon: { src: 'icon2.png', alt: 'Icon 2', value: 'Icon Value 2' } },
        ],
        action: { src: 'action1.png', alt: 'Action 1', text: 'Action Text 1' },
      },
    ];

    component.pageContent = { headers: [], body: bodyData };
    fixture.detectChanges();

    const trElements = fixture.nativeElement.querySelectorAll('.table-row');
    expect(trElements.length).toEqual(bodyData.length);

    trElements.forEach((tr: any, index: number) => {
      const rowData = bodyData[index];
      const tdElements = tr.querySelectorAll('th');

      expect(tdElements[0].textContent.trim()).toEqual(rowData.date);
      expect(tdElements[1].textContent.trim()).toEqual(rowData.description);

      const imgElements = tdElements[2].querySelectorAll('img');
      expect(imgElements[0].getAttribute('src')).toEqual(rowData.iconStatus.src);
      expect(imgElements[1].getAttribute('src')).toEqual('../../../assets/icons/arrow-left.png');
    });
  });
});

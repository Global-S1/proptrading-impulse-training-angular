export interface IPAGE_CONTENT_ORDERS {
  title: string;
  paragraph: string;
  table: ITableOrders;
}

export interface ITableOrders {
  headers: string[]
  body: Order[];
}

interface OrderState {
  src: string;
  alt: string;
  text: string;
}

interface OrderAction {
  src: string;
  alt: string;
  text: string;
}

interface Order {
  Id: number;
  challenge: string;
  state: OrderState;
  amount: number;
  currency: string;
  date: string;
  action: OrderAction;
}

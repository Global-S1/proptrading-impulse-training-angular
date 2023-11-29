import { IPRODUCTS } from "../interface/products.interface";

export interface IPAGE_CONTENT_CONFIGURE {
  title: string,
  choiceProduct: {
    title: string,
    products: IPRODUCTS[],
  },
  choiceChallenge: {
    title: string,
    options: string[],
  },
}

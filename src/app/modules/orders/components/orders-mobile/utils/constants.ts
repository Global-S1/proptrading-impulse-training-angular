import { IPAGE_CONTENT_ORDERS_MOBILE } from "./constants.interface";

export const PAGE_CONTENT_ORDERS_MOBILE: IPAGE_CONTENT_ORDERS_MOBILE = {
  headers: ["Fecha", "Desafío", "Estado"],
  body: [
    {
      date: "12/06",
      description: "Impulse challenge 5k",
      iconStatus: {
        src: "../../../assets/icons/check.png",
        alt: "check"
      },
      data: [
        {
          concept: "Id",
          value: 2020
        },
        {
          concept: "Cantidad",
          value: 135
        },
        {
          concept: "Moneda",
          value: "USD"
        },
        {
          concept: "Estado",
          icon: {
            src: "../../../assets/icons/check.png",
            alt: "check",
            value: "pagado"
          }
        }
      ],
      action: {
        src: "../../../assets/icons/escudo.png",
        alt: "escudo",
        text: "Ver credenciales"
      }
    }
  ]
}

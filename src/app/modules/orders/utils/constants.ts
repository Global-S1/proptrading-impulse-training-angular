import { IPAGE_CONTENT_ORDERS } from "./contanst.interface";

export const PAGE_CONTENT_ORDERS: IPAGE_CONTENT_ORDERS = {
  title: "Órdenes",
  paragraph: "Aca veras las ordenes de compra de tus desafíos",
  table: {
    headers: ["Id", "Desafío", "Estado", "Monto", "Moneda", "Creado", "Acción"],
    body: [
      {
        Id: 2342,
        challenge: "Impulse challenge 5k",
        state: {
          src: "../../../assets/icons/check.png",
          alt: "check",
          text: "Pagado"
        },
        amount: 135,
        currency: "Usd",
        date: "Nov 11",
        action: {
          src: "../../../assets/icons/escudo.png",
          alt: "escudo",
          text: "Ver credenciales"
        }
      },
      {
        Id: 2341,
        challenge: "Impulse challenge 5k",
        state: {
          src: "../../../assets/icons/time.png",
          alt: "time",
          text: "Pendiente"
        },
        amount: 135,
        currency: "Usd",
        date: "Nov 11",
        action: {
          src: "../../../assets/icons/refresh-circle.png",
          alt: "refresh-circle",
          text: "Verificar"
        }
      },
      {
        Id: 2340,
        challenge: "Impulse challenge 5k",
        state: {
          src: "../../../assets/icons/alert-circle.png",
          alt: "alert-circle",
          text: "Creado"
        },
        amount: 135,
        currency: "Usd",
        date: "Nov 11",
        action: {
          src: "../../../assets/icons/cash.png",
          alt: "cash",
          text: "Pagar"
        }
      },
    ]
  },
}

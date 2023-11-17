import { IOrderSummaryConstants } from "../interface/constants.interface";

export const constantsOrderSummary: IOrderSummaryConstants = {
  title: "Resumen del pedido",
  changeMethod: {
    src: '../../../assets/icons/arrow-left.png',
    alt: 'arrow-left',
    routerLink: '/',
    anchor: 'Escoge otro método de pago',
  },
  box: {
    label: 'PAGANDO CON',
    src: '../../../assets/images/coinpayments.png',
    alt: 'coinpayments',
    summaryData: [
      {
        description: "Días Adicionales",
        result: "15 días"
      },
      {
        description: "Crypto moneda",
        result: "USDT"
      },
      {
        description: "Red",
        result: "TRC20"
      }
    ],
    total: {
      description: 'Monto a Pagar',
      amount: "$15"
    }
  },
  QR: {
    src: "../../../assets/QRcoinpayments.png",
    alt: "QR"
  },
  codePromotion: {
    input: {
      custom: "default"
    },
    button: {
      src: "../../../assets/icons/documents.png",
      alt: "documents"
    }
  },
  warning: {
    src: "../../../assets/icons/warning.png",
    alt: "warning",
    subtitle: "Ten en cuenta",
    paragraph: "El código de pago de su orden solo es válido durante 2 horas. Si transcurre este tiempo, deberá generar un nuevo código antes de realizar su pago."
  },
  timeRestart: {
    label: "TIEMPO RESTANTE",
    button: {
      text: "IR A SITIO DEL PROCESADOR",
      custom: "pageOrderSummary",
      img: {
        src: "../../../assets/icons/Union.png",
        alt: "union"
      }
    }
  },
  paragraph: ["Asegúrate de enviar suficiente como para cubrir las comisiones de transacción. Solo usa envíos regulares, no con funciones especiales o algún tipo de contrato.", "ID de pago: CPHG07VZ5RAVYFXF6FENEBKBND", "Para volver al ver esta información puedes ir a la sección de Órdenes"],
  button: {
    text: "YA REALICÉ EL PAGO",
    custom: "pageOrderSummary"
  }
};

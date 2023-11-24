import { IPAGE_CONTENT_PROMOTION } from "./constants.interface";

export const PAGE_CONTENT_PROMOTION: IPAGE_CONTENT_PROMOTION = {
  title: {
    icon: {
      src: "../../../assets/ticket.png",
      alt: "ticket"
    },
    text: "Cuenta Promocional",
    description: "Ingresa el código promocional que te fue brindado para obtener tu desafío"
  },
  fields: {
    input: {
      placeholder: "Ingresar código promocional",
      custom: "text-promotion"
    },
    button: {
      text: "VALIDAR CÓDIGO",
      custom: "pagePromotion"
    }
  },
  paragraph: "Toda la información proporcionada en este sitio está destinada únicamente a fines de estudio relacionados con el trading en los mercados financieros y no sirve en modo alguno como recomendación de inversión específica, recomendación comercial, análisis de oportunidades de inversión o recomendación general similar en relación con eltrading de instrumentos de inversión. El trading en los mercados financieros es una actividad de alto riesgo y seaconseja no arriesgar más de lo que uno pueda permitirse perder. IMPULSE WORLD, no presta ninguno de los servicios de inversión enumerados en la Ley de Empresas del Mercado de Capitales n° 256/2004 Coll. La información contenida en este sitio no está dirigida a los residentes de ningún país o jurisdicción en los que su distribución o uso sea contrario a las leyes o reglamentos locales IMPULSE WORLD no son un broker y no aceptan depósitos. La solución técnica ofrecida para las plataformas IMPULSE WORLD y la alimentación de datos es impulsada por los proveedores de liquidez institucional. https://worldtradersbroker.com"
}

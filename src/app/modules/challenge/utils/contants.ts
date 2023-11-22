import { IPAGE_CONTENT_CHALLENGE } from './constants.interface';

export const PAGE_CONTENT_CHALLENGE: IPAGE_CONTENT_CHALLENGE = {
  title: 'Tus desafíos',
  buyChallenge: [
    {
      title: {
        text: "Nº de cuenta:",
        numberClient: "#09876452876"
      },
      phase: "Fase 1",
      state: "Activo",
      credential: {
        src: "../../../../assets/icons/escudo.png",
        alt: "icon-escudo",
        text: "Ver Credenciales",
        buttonAnalyzer: {
          text: "VER MAS EN ANALYZER",
          theme: "pageAnalyzer"
        }
      },
      line: {
        src: "../../../../assets/images/line.svg",
        alt: "Line"
      },
      metrics: {
        equity:{
          text: "Equity: ",
          amount: "$101.003",
          percentage: "+1.03%"
        },
        resumen: {
          title: "Resumen de las reglas generales:",
          challengeProgress: [
            {
              text: ['Objetivo del 8% ', '0.67%'],
              value: 30
            },
            {
              text: ['5% de perdida máxima ', '1.36%'],
              value: 30
            },
            {
              text: ['10% de perdida total ', '0.06%'],
              value: 30
            },
          ]
        }
      },
    }
  ],
  default: {
    img: {
      src: '../../../assets/icons/rocket.png',
      alt: 'icon-rocket',
    },
    title: 'Compra tu primer desafío',
    paragraph: 'Desata tu potencial de trading y consigue la IMPULSE Account',
    requirements: [
      'Facilitaremos una IMPULSE Account hasta $300,000',
      'Demuestre sus habilidades de trading',
      'Análisis completo de su Cuenta',
      'Recompensa por su consistencia',
    ],
    button: {
      text: 'COMPRAR',
      custom: 'page',
    },
  },
};

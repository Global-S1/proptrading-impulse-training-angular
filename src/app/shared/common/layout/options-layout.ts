export interface IOptions {
  id: number,
  src: string,
  alt: string,
  text: string,
  values?: string[]
}


export const options: IOptions[] = [
  {
    id: 1,
    src: "../../../../../assets/options/home.svg",
    alt: "icon-menu-home",
    text: "Inicio"
  },
  {
    id: 2,
    src: "../../../../../assets/options/analyzer.svg",
    alt: "icon-menu-home",
    text: "Analyzer"
  },
  {
    id: 3,
    src: "../../../../../assets/options/elevate.svg",
    alt: "icon-menu-home",
    text: "Elevate"
  },
  {
    id: 4,
    src: "../../../../../assets/options/promotion.svg",
    alt: "icon-menu-home",
    text: "Promociones",
    values: ["Promociones Vigentes", "Cuentas promocionales" ]
  },
  {
    id: 5,
    src: "../../../../../assets/options/orders.svg",
    alt: "icon-menu-home",
    text: "Órdenes"
  },
  {
    id: 6,
    src: "../../../../../assets/options/profile.svg",
    alt: "icon-menu-home",
    text: "Perfil"
  }
]

import { IOptionThemeBtn } from "src/app/shared/core/theme.styles.interface"
import { IBuyChallenge } from "../interface/buy-challenge.interface"

export interface IPAGE_CONTENT_CHALLENGE {
  title: string,
  buyChallenge: IBuyChallenge[],
  default: {
    img: {
      src: string,
      alt: string
    },
    title: string,
    paragraph: string,
    requirements: string[],
    button: {
      text: string,
      custom: IOptionThemeBtn
    }
  }
}

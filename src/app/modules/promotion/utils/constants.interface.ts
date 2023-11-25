import { IOptionCustomBtn } from "src/app/shared/core/theme.styles.interface"

export interface IPAGE_CONTENT_PROMOTION {
  title: {
    icon: {
      src: string,
      alt: string
    },
    text: string,
    description: string
  },
  fields: {
    input: {
      placeholder: string,
      custom: string
    },
    button: {
      text: string,
      custom: IOptionCustomBtn
    }
  },
  paragraph: string
}

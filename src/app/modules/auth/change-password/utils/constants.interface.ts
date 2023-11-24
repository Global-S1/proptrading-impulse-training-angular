import { IOptionCustomBtn } from "src/app/shared/core/theme.styles.interface";
import { IField } from "../interface/field.interface"

export interface ICONSTANTS_CHANGE_PASSWORD {
  title: string,
  fields: IField[],
  requirements: string[],
  button: {
    text: string,
    custom: IOptionCustomBtn,
  },
};

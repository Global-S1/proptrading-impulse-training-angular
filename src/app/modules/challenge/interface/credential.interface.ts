import { IOptionThemeBtn } from "src/app/shared/core/theme.styles.interface";

export interface ICredential{
  src: string;
  alt: string;
  text: string;
  buttonAnalyzer: {
    text: string;
    theme: IOptionThemeBtn;
  };
}

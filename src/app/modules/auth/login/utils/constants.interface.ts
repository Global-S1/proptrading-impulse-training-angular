import { IOptionThemeBtn } from "src/app/shared/core/theme.styles.interface";

interface ILogo {
  src: string;
  alt: string;
}

interface IFormInput {
  title: string;
  input: {
    type: string;
    placeholder: string;
  };
}

interface IForgotPassword {
  href: string;
  text: string;
}

interface IButton {
  text: string;
  custom: IOptionThemeBtn
}

interface IAsk {
  text: string;
  anchor: string;
}


export interface ICONSTANTS_LOGIN {
  title: string;
  logos: ILogo[];
  alternative: string;
  formInput: IFormInput[];
  forgotPassword: IForgotPassword;
  button: IButton;
  ask: IAsk;
}

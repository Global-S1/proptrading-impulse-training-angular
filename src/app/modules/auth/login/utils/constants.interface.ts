import { IOptionCustomBtn } from "src/app/shared/core/theme.styles.interface";
import { ILogo } from '../interface/logo.interface';
import { IFormInput } from '../interface/formInput.interface';
import { IForgotPassword } from '../interface/forgotPassword.interface';
import { IButton } from '../interface/button.interface';
import { IAsk } from '../interface/ask.interface';


export interface ICONSTANTS_LOGIN {
  title: string;
  logos: ILogo[];
  alternative: string;
  formInput: IFormInput[];
  forgotPassword: IForgotPassword;
  button: IButton;
  ask: IAsk;
}

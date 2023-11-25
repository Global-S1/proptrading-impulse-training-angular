import { IFields } from "../interface/fields.interface";
import { ISocialRegister } from "../interface/social-register.interface";

export interface ICONTANTS_REGISTER {
  title: string;
  socialRegister: ISocialRegister[];
  alternative: string;
  fields: IFields[];
  button: {
    text: string;
    min: string;
  };
  ask: string[];
}

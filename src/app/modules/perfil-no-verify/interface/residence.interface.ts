import { IFinance } from "./finance.interface";

export interface IResidence extends IFinance {
  description: string;
  condicional: string;
  text: string;
};

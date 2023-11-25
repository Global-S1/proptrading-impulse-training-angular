import { InputField } from "./input-field.interface";
import { SelectField } from "./select-field.interface";

export interface IPersonalData {
  subtitle: string;
  fields: (InputField | SelectField)[];
}

import { IOptionCustomBtn } from "src/app/shared/core/theme.styles.interface";

export interface ISelectProfile {
  label: string,
  info: string[],
}

export interface IInputProfile {
  label: string,
  custom: IOptionCustomBtn,
  placeholder: string
}

// --------------------------------------------------------

interface RegistrationForm {
  title: string;

  personalData: {
    subtitle: string;
    fields: (InputField | SelectField)[];
  };

  finance: {
    subtitle: string;
    fields: SelectField[];
  };

  profile: {
    subtitle: string;
    fields: SelectField[];
  };

  experience: {
    subtitle: string;
    question: string;
    response: string[];
    fields: (InputField | SelectField)[];
  };

  residence: {
    subtitle: string;
    description: string;
    fields: SelectField[];
    condicional: string;
    text: string;
  };

  document: {
    subtitle: string;
    description: string[];
    filesUploader: string[];
  };
}

export interface InputField {
  title: string;
  placeholder: string;
  custom: string;
}

export interface SelectField {
  title?: string;
  placeholder?: string;
  custom?: string;
  label: string;
  info: string[];
}

export default RegistrationForm;


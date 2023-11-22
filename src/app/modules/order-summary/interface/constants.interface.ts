import { IOptionCustomBtn } from "src/app/shared/core/theme.styles.interface";

export interface IOrderSummaryConstants {
  title: string;
  changeMethod: {
    src: string;
    alt: string;
    routerLink: string;
    anchor: string;
  };
  box: {
    label: string;
    src: string;
    alt: string;
    summaryData: ISummaryData[];
    total: {
      description: string;
      amount: string;
    };
  };
  QR: {
    src: string;
    alt: string;
  };
  codePromotion: {
    input: {
      custom: string;
    };
    button: {
      src: string;
      alt: string;
    };
  };
  warning: {
    src: string;
    alt: string;
    subtitle: string;
    paragraph: string;
  };
  timeRestart: {
    label: string;
    button: {
      text: string;
      custom: IOptionCustomBtn;
      img: {
        src: string;
        alt: string;
      };
    };
  };
  paragraph: string[];
  button: {
    text: string;
    custom: IOptionCustomBtn;
  };
}

export interface ISummaryData {
  description: string;
  result: string;
}

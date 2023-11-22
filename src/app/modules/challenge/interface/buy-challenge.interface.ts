import { ICredential } from "../interface/credential.interface"
import { IMetricsEquity } from "../interface/metrics-equity.interface"
import { IChallengeProgress } from "../interface/challenge-progress.interface"
import { IOptionThemeBtn } from "src/app/shared/core/theme.styles.interface";

export interface IBuyChallenge {
  title: {
    text: string;
    numberClient: string;
  };
  phase: string;
  state: string;
  credential: ICredential;
  line: {
    src: string;
    alt: string;
  };
  metrics: {
    equity: IMetricsEquity;
    resumen: {
      title: string;
      challengeProgress: IChallengeProgress[];
    };
  };
};

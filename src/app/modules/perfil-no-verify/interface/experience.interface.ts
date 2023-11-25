import { IPersonalData } from "./personal-data.interface";

export interface IExperience extends IPersonalData {
  question: string,
  response: [string, string],
};

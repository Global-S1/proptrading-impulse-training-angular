import { IPersonalData } from "../interface/personal-data.interface";
import { IFinance } from "../interface/finance.interface";
import { IProfile } from "../interface/profile.interface";
import { IExperience } from "../interface/experience.interface";
import { IResidence } from "../interface/residence.interface";
import { IDocument } from "../interface/document.interface";
import { IButtonPNV } from "../interface/button.interface";

export interface IPAGE_CONTENT_PERFIL_NO_VERIFY {
  title: string,
  personalData: IPersonalData,
  finance: IFinance,
  profile: IProfile,
  experience: IExperience,
  residence: IResidence,
  document: IDocument,
  button: IButtonPNV
}

// import { ToastPlacement } from "@gluestack-ui/toast/lib/types";

export type ToastPlacement =
  | "top-start"
  | "top-center"
  | "top-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

export type SessionInfoType = {
  email: string;
  exp: UnixTimestampType;
  iat: UnixTimestampType;
  id: string;
  key?: string;
  name: string;
  roles: string[];
  token: string;
};

export type ScreenAccessType = {
  name: string;
  read: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
};

export type ApiResponseMessageType =
  | "SAVED_SUCCESSFULLY"
  | "UPDATED_SUCCESSFULLY"
  | "RECORD_NOT_EXISTS"
  | "SAVED_SUCCESSFULL"
  | "DELETED_SUCCESSFULL"
  | "INVALID_DATA"
  | "MISS_MATCH_MESSAGE"
  | string;

export type ApiResponseType = {
  data?: unknown;
  error?: unknown;
  message?: ApiResponseMessageType;
};

export type RolesType = "END_USER" | "PRACTITIONER" | "ADMIN" | "SUPER_ADMIN";

export type CurrencyCodeType = "INR" | "USD" | "JPY";

export type AuthStateType = {
  token: string | null;
  isAuthenticated: boolean;
  userId: string | null;
};

export type ToastType = {
  description: string;
  id: string;
  show: boolean;
  title: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  placement: ToastPlacement;
};

export type ModalType = {
  show: boolean;
  title: string;
  body: string;
  primaryAction: {
    label: string;
    action: () => void;
  };
  secondaryAction: {
    label: string;
    action: () => void;
  };
};

export type ZodiacSignType = {
  _id: string;
  active: boolean;
  mobImg: string;
  name: string;
  nameLang: TranslationType;
  summaryLang: TranslationType;
  webImg: string;
  rankOrder: number;
};

export type LanguageType = {
  _id: string;
  lang: string;
  name: string;
  rtl: boolean;
  active: boolean | string;
  nameLocal: string;
  updatedOn: Date;
  country: CountryType["_id"];
};
export type AllLanguageCodesType =
  | "en-US"
  | "kn-IN"
  | "ta-IN"
  | "hi-IN"
  | "te-IN";

export type SupportedLanguagesType = Extract<
  AllLanguageCodesType,
  "en-US" | "te-IN"
>;

export type TranslationType = Record<SupportedLanguagesType, string>;

export type CountryType = {
  _id: string;
  name: string;
  nameLocal: string;
  googleNames: string[];
  currencyCode: string;
  currencyHex: string;
  telCode: string;
  flag: string;
  flagUrl: string;
  active: boolean;
};

export type FileType = {
  filename: string;
  mimetype: string;
  url: string;
  _id: string;
};

export interface SearchType {
  query: string | number;
}

export type UnixTimestampType = number & { __brand: "UnixTimestamp" };

export interface SiteInfoType {
  _id: string;
  summary: string;
  title: string;
  active?: boolean;
  img?: string;
  video?: string;
  order?: number;
  page: string;
  subTitle?: string;
}

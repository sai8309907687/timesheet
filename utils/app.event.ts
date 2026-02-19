import { signal } from "@preact/signals-react";

import AppStorage, {
  SESSION_INFO,
  TOKEN,
  GOOGLE_ACCESS_TOKEN,
  LANG,
  THEME,
} from "./app.storage";
import { AppRouter } from "./app.router";
import { ModalType } from "./app.types";
import { ScreenAccessType } from "./app.types";
import { screenAccessInit } from "./app.util";
export const ScreenAccess = signal<ScreenAccessType>({} as ScreenAccessType);
screenAccessInit();

type RouterType = {
  pathname: string;
  query?: Record<string, string>;
};

/**
 *  routerEffect
 */
export const RouterEvent = signal({} as RouterType);
export const SessionToken = signal<string | null>(AppStorage.getData(TOKEN) || null);

export const SessionLang = signal<string>(
  AppStorage.getData(LANG, true) || AppStorage.getData(LANG) || "en-US",
);

export const ThemeMode = signal<string>(AppStorage.getData(THEME, true) || "light");
export const RouterChange = (
  pathname: string,
  query?: Record<string, string>,
) => {
  RouterEvent.value = { pathname, query };
  if (pathname == AppRouter.SIGN_IN) {
    AppStorage.removeData(TOKEN);
    AppStorage.removeData(SESSION_INFO);
    AppStorage.removeData(GOOGLE_ACCESS_TOKEN, true);
  }
};

export const ProgressBar = signal<boolean>(false);

export const ShowLoader = (show: boolean) => {
  ProgressBar.value = show;
};

type ToastType = {
  show: boolean;
  message: string;
  type: "success" | "default" | "foreground" | "primary" | "secondary" | "warning" | "danger";
};

export const ToastMessage = signal({
  show: false,
  message: "",
  type: "success",
  title: "success",
  placement: "top-center",
  variant: "flat",
  duration: 3000,
} as ToastType);

export const ShowToast = (
  message: string,
  type: "success" | "default" | "foreground" | "primary" | "secondary" | "warning" | "danger" = "warning",
) => {
  ToastMessage.value = {
    show: true,
    message,
    type,
  };
};

export const ModalState = signal<ModalType>({
  show: false,
  title: "",
  body: "",
  primaryAction: {
    label: "",
    action: () => { },
  },
  secondaryAction: {
    label: "",
    action: () => { },
  },
});

export const ShowModal = (modalConfig: Partial<ModalType>) => {
  ModalState.value = {
    show: true,
    title: modalConfig.title || "",
    body: modalConfig.body || "",
    primaryAction: modalConfig.primaryAction || {
      label: "",
      action: () => {
        if (modalConfig.primaryAction?.action) {
          modalConfig.primaryAction.action();
        }
        CloseModal();
      },
    },
    secondaryAction: modalConfig.secondaryAction || {
      label: "",
      action: () => { },
    },
  };
};

export const CloseModal = () => {
  ModalState.value = {
    show: false,
    title: "",
    body: "",
    primaryAction: {
      label: "",
      action: () => { },
    },
    secondaryAction: {
      label: "",
      action: () => { },
    },
  };
};

export const CheckSession = () => {
  SessionToken.value = AppStorage.getData(TOKEN) || null;
};

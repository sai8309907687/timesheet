const APP_ID = "AS";

export const TOKEN = "TOKEN";
export const SESSION_INFO = "SESSION_INFO";
export const GOOGLE_ACCESS_TOKEN = "GOOGLE_ACCESS_TOKEN";
export const NAV = "NAV";
export const SCREEN_ACCESS = "SCREEN_ACCESS";

export const TENANT_ID = "TENANT_ID";
export const LANG = "LANG";
export const THEME = "THEME";

export const TRANS = "TRANS";
export const DIR = "DIR";

const setData = (setName: string, setObject: unknown, isLocal = false) => {
  const name = APP_ID + "-" + setName;
  let data = "";
  if (setObject) {
    data = typeof setObject === "string" ? setObject : JSON.stringify(setObject);
  }
  if (isLocal) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(name, data);
    }
  } else {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(name, data);
    }
  }
};

const getData = (getName: string, isLocal = false) => {
  getName = APP_ID + "-" + getName;
  let data = null;

  if (isLocal) {
    if (typeof window !== "undefined") {
      data = window.localStorage.getItem(getName);
    }
  } else {
    if (typeof window !== "undefined") {
      data = window.sessionStorage.getItem(getName);
    }
  }
  if (data) {
    data =
      data.indexOf("{") > -1 || data.indexOf("[") > -1
        ? JSON.parse(data)
        : data;
  }

  return data;
};

const removeData = (key: string, isLocal = false) => {
  key = APP_ID + "-" + key;
  if (isLocal) {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  } else {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(key);
    }
  }
};

const clearData = () => {
  const user = getData("remember-me", true);

  if (typeof window !== "undefined") {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
  if (user != null) {
    setData("remember-me", user, true);
  }

  return;
};

const envData = (key: string): string | null => {
  if (typeof window !== "undefined") {
    return (window as Window & { env?: Record<string, string> })?.env?.['REACT_APP_ANTWEB_' + key.toUpperCase()] || null;
  }
  return null;
};

const AppStorage = {
  getData,
  setData,
  removeData,
  clearData,
  envData,
};

export default AppStorage;

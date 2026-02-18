import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON translation files
import enUS from "./locales/en-US.json";
import hiIN from "./locales/hi-IN.json";
import knIN from "./locales/kn-IN.json";
import mlIN from "./locales/ml-IN.json";
import taIN from "./locales/ta-IN.json";
import teIN from "./locales/te-IN.json";

import AppStorage, { DIR, LANG, TRANS } from "@/utils/app.storage";
import { SessionLang } from "@/utils/app.event";

export const languages = [
    {
        code: "en-US",
        name: "English",
        locale: "English",
        dir: "ltr",
    },
    {
        code: "hi-IN",
        name: "Hindi",
        locale: "हिन्दी",
        dir: "ltr",
    },
    {
        code: "kn-IN",
        name: "Kannada",
        locale: "ಕನ್ನಡ",
        dir: "ltr",
    },
    {
        code: "ml-IN",
        name: "Malayalam",
        locale: "മലയാളം",
        dir: "ltr",
    },
    {
        code: "ta-IN",
        name: "Tamil",
        locale: "தமிழ்",
        dir: "ltr",
    },
    {
        code: "te-IN",
        name: "Telugu",
        locale: "తెలుగు",
        dir: "ltr",
    },
] as const;

export const resources = {
    "en-US": {
        translation: enUS,
    },
    "hi-IN": {
        translation: hiIN,
    },
    "kn-IN": {
        translation: knIN,
    },
    "ml-IN": {
        translation: mlIN,
    },
    "ta-IN": {
        translation: taIN,
    },
    "te-IN": {
        translation: teIN,
    },
} as const;

// Initialize with stored language if available
const storedLang = AppStorage.getData(LANG) || "en-US";

i18n.use(initReactI18next).init({
    resources,
    lng: storedLang,
    fallbackLng: "en-US",
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
});

// Language change listener
i18n.on("languageChanged", (lng: string) => {
    try {
        const dir = languages.find(l => l.code === lng)?.dir || "ltr";

        AppStorage.setData(DIR, dir);
        AppStorage.setData(LANG, lng);
        SessionLang.value = lng;
        if (lng in resources) {
            AppStorage.setData(TRANS, (resources as any)[lng].translation);
        }
    } catch (error) {
        console.error("Language change error", error);
    }
});

export const trans = (
    nameLang?: Record<string, string>,
    defaultName?: string,
) => {
    let val = nameLang ? nameLang[SessionLang.value] : defaultName;

    return val === undefined || val === null || val.trim() === ""
        ? defaultName
        : val;
};

export default i18n;

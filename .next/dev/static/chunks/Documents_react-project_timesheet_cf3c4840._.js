(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/react-project/timesheet/i18n/locales/en-US.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcome":"Welcome to Timesheet","login":"Login","email":"Email","password":"Password","signIn":"Sign In","save":"Save","cancel":"Cancel","dashboard":"Dashboard","profile":"Profile","settings":"Settings","logout":"Logout","required":"Required","somethingWentWrong":"Something went wrong"});}),
"[project]/Documents/react-project/timesheet/i18n/locales/hi-IN.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcome":"टाइमशीट में आपका स्वागत है","login":"लॉगिन","email":"ईमेल","password":"पासवर्ड","signIn":"साइन इन करें","save":"सहेजें","cancel":"रद्द करें","dashboard":"डैशबोर्ड","profile":"प्रोफ़ाइल","settings":"सेटिंग्स","logout":"लॉगआउट","required":"आवश्यक","somethingWentWrong":"कुछ गलत हो गया"});}),
"[project]/Documents/react-project/timesheet/i18n/locales/kn-IN.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcome":"ಟೈಮ್‌ಶೀಟ್‌ಗೆ ಸ್ವಾಗತ","login":"ಲಾಗಿನ್","email":"ಇಮೇಲ್","password":"ಪಾಸ್‌ವರ್ಡ್","signIn":"ಸೈನ್ ಇನ್ ಮಾಡಿ","save":"ಉಳಿಸಿ","cancel":"ರದ್ದುಮಾಡಿ","dashboard":"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್","profile":"ಪ್ರೊಫೈಲ್","settings":"ಸೆಟ್ಟಿಂಗ್‌ಗಳು","logout":"ಲಾಗ್ ಔಟ್","required":"ಅಗత్యವಿದೆ","somethingWentWrong":"ಏನೋ ತಪ್ಪಾಗಿದೆ"});}),
"[project]/Documents/react-project/timesheet/i18n/locales/ml-IN.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcome":"ടൈംഷീറ്റിലേക്ക് സ്വാഗതം","login":"ലോഗിൻ","email":"ഇമെയിൽ","password":"പാസ്‌വേഡ്","signIn":"സൈൻ ഇൻ","save":"സേവ് ചെയ്യുക","cancel":"റദ്ദാക്കുക","dashboard":"ഡാഷ്‌ബോർഡ്","profile":"പ്രൊഫൈൽ","settings":"ക്രമീകരണങ്ങൾ","logout":"ലോഗ്ഔട്ട്","required":"ആവശ്യമാണ്","somethingWentWrong":"എന്തോ തെറ്റ് സംഭവിച്ചു"});}),
"[project]/Documents/react-project/timesheet/i18n/locales/ta-IN.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcome":"டைம்ஷீட்டிற்கு வரவேற்கிறோம்","login":"உள்நுழை","email":"மின்னஞ்சல்","password":"கடவுச்சொல்","signIn":"உள்நுழைக","save":"சேமி","cancel":"ரத்து செய்","dashboard":"டாஷ்போர்டு","profile":"சுயவிவரம்","settings":"அமைப்புகள்","logout":"வெளியேறு","required":"தேவை","somethingWentWrong":"ஏதோ தவறு நடந்தது"});}),
"[project]/Documents/react-project/timesheet/i18n/locales/te-IN.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"welcome":"టైమ్ షీట్ కు స్వాగతం","login":"లాగిన్","email":"ఇమెయిల్","password":"పాస్‌వర్డ్","signIn":"సైన్ ఇన్","save":"సేవ్ చేయండి","cancel":"రద్దు చేయండి","dashboard":"డ్యాష్‌బోర్డ్","profile":"ప్రొఫైల్","settings":"సెట్టింగ్స్","logout":"లాగ్అవుట్","required":"అవసరం","somethingWentWrong":"ఏదో తప్పు జరిగింది"});}),
"[project]/Documents/react-project/timesheet/utils/services/app.storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIR",
    ()=>DIR,
    "GOOGLE_ACCESS_TOKEN",
    ()=>GOOGLE_ACCESS_TOKEN,
    "LANG",
    ()=>LANG,
    "NAV",
    ()=>NAV,
    "REMEMBER_ME",
    ()=>REMEMBER_ME,
    "SCREEN_ACCESS",
    ()=>SCREEN_ACCESS,
    "SESSION_INFO",
    ()=>SESSION_INFO,
    "THEME",
    ()=>THEME,
    "TOKEN",
    ()=>TOKEN,
    "TRANS",
    ()=>TRANS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const APP_ID = "TS"; // TS for Timesheet
const TOKEN = "TOKEN";
const SESSION_INFO = "SESSION_INFO";
const SCREEN_ACCESS = "SCREEN_ACCESS";
const GOOGLE_ACCESS_TOKEN = "GOOGLE_ACCESS_TOKEN";
const NAV = "NAV";
const REMEMBER_ME = "remember-me";
const TRANS = "TRANS";
const DIR = "DIR";
const LANG = "LANG";
const THEME = "THEME";
const setData = (setName, setObject, isLocal = false)=>{
    setName = APP_ID + "-" + setName;
    if (setObject) {
        setObject = typeof setObject === "string" ? setObject : JSON.stringify(setObject);
    }
    if (isLocal) {
        if ("TURBOPACK compile-time truthy", 1) {
            window.localStorage.setItem(setName, setObject);
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            window.sessionStorage.setItem(setName, setObject);
        }
    }
};
const getData = (getName, isLocal = false)=>{
    getName = APP_ID + "-" + getName;
    let data = null;
    if (isLocal) {
        if ("TURBOPACK compile-time truthy", 1) {
            data = window.localStorage.getItem(getName);
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            data = window.sessionStorage.getItem(getName);
        }
    }
    if (data) {
        try {
            data = data.indexOf("{") > -1 || data.indexOf("[") > -1 ? JSON.parse(data) : data;
        } catch (e) {
            console.error("Error parsing storage data", e);
        }
    }
    return data;
};
const removeData = (key, isLocal = false)=>{
    key = APP_ID + "-" + key;
    if (isLocal) {
        if ("TURBOPACK compile-time truthy", 1) {
            window.localStorage.removeItem(key);
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            window.sessionStorage.removeItem(key);
        }
    }
};
const clearData = ()=>{
    const user = getData(REMEMBER_ME, true);
    if ("TURBOPACK compile-time truthy", 1) {
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
    if (user != null) {
        setData(REMEMBER_ME, user, true);
    }
    return;
};
const AppStorage = {
    getData,
    setData,
    removeData,
    clearData
};
const __TURBOPACK__default__export__ = AppStorage;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/utils/services/app.event.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckSession",
    ()=>CheckSession,
    "ProgressBar",
    ()=>ProgressBar,
    "RouterChange",
    ()=>RouterChange,
    "RouterEvent",
    ()=>RouterEvent,
    "RtlDir",
    ()=>RtlDir,
    "SessionLang",
    ()=>SessionLang,
    "SessionToken",
    ()=>SessionToken,
    "ShowProgress",
    ()=>ShowProgress,
    "ShowToast",
    ()=>ShowToast,
    "ThemeMode",
    ()=>ThemeMode,
    "ToastMessage",
    ()=>ToastMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/services/app.storage.ts [app-client] (ecmascript)");
;
;
const SessionToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"]) || null);
const SessionLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANG"]) || "en-US");
const ThemeMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"]) || "light");
const RtlDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIR"]) === "rtl");
const RouterEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])({});
const RouterChange = (pathname, query)=>{
    RouterEvent.value = {
        pathname,
        query
    };
};
_c = RouterChange;
const ToastMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])({
    show: false,
    message: "",
    type: "success"
});
const ShowToast = (message, type = "warning")=>{
    ToastMessage.value = {
        show: true,
        message,
        type
    };
};
_c1 = ShowToast;
const CheckSession = ()=>{
    SessionToken.value = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"]) || null;
};
_c2 = CheckSession;
const ProgressBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(false);
const ShowProgress = (show)=>{
    ProgressBar.value = show;
};
_c3 = ShowProgress;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RouterChange");
__turbopack_context__.k.register(_c1, "ShowToast");
__turbopack_context__.k.register(_c2, "CheckSession");
__turbopack_context__.k.register(_c3, "ShowProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/i18n/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "languages",
    ()=>languages,
    "resources",
    ()=>resources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
// Import JSON translation files
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$en$2d$US$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/en-US.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$hi$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/hi-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$kn$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/kn-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$ml$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/ml-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$ta$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/ta-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$te$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/te-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/services/app.storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/services/app.event.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const languages = [
    {
        code: "en-US",
        name: "English",
        locale: "English",
        dir: "ltr"
    },
    {
        code: "hi-IN",
        name: "Hindi",
        locale: "हिन्दी",
        dir: "ltr"
    },
    {
        code: "kn-IN",
        name: "Kannada",
        locale: "ಕನ್ನಡ",
        dir: "ltr"
    },
    {
        code: "ml-IN",
        name: "Malayalam",
        locale: "മലയാളം",
        dir: "ltr"
    },
    {
        code: "ta-IN",
        name: "Tamil",
        locale: "தமிழ்",
        dir: "ltr"
    },
    {
        code: "te-IN",
        name: "Telugu",
        locale: "తెలుగు",
        dir: "ltr"
    }
];
const resources = {
    "en-US": {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$en$2d$US$2e$json__$28$json$29$__["default"]
    },
    "hi-IN": {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$hi$2d$IN$2e$json__$28$json$29$__["default"]
    },
    "kn-IN": {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$kn$2d$IN$2e$json__$28$json$29$__["default"]
    },
    "ml-IN": {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$ml$2d$IN$2e$json__$28$json$29$__["default"]
    },
    "ta-IN": {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$ta$2d$IN$2e$json__$28$json$29$__["default"]
    },
    "te-IN": {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$te$2d$IN$2e$json__$28$json$29$__["default"]
    }
};
// Initialize with stored language if available
const storedLang = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANG"]) || "en-US";
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
    resources,
    lng: storedLang,
    fallbackLng: "en-US",
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
// Language change listener
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("languageChanged", (lng)=>{
    try {
        const dir = languages.find((l)=>l.code === lng)?.dir || "ltr";
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIR"], dir);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANG"], lng);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionLang"].value = lng;
        if (lng in resources) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANS"], resources[lng].translation);
        }
    } catch (error) {
        console.error("Language change error", error);
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/components/ClientProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientProvider",
    ()=>ClientProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/services/app.event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/services/app.storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ClientProvider({ children }) {
    _s();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientProvider.useEffect": ()=>{
            // Sync i18n with signal
            i18n.changeLanguage(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionLang"].value);
        }
    }["ClientProvider.useEffect"], [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionLang"].value,
        i18n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientProvider.useEffect": ()=>{
            // Sync theme with storage on mount
            const storedTheme = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME"]);
            if (storedTheme) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$services$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].value = storedTheme;
            }
        }
    }["ClientProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "data-theme",
        defaultTheme: "light",
        enableSystem: false,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/components/ClientProvider.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(ClientProvider, "9gqvwdTKR1lVl00cx7jm22Czzyw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ClientProvider;
var _c;
__turbopack_context__.k.register(_c, "ClientProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_react-project_timesheet_cf3c4840._.js.map
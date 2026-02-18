module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "SCREEN_ACCESS",
    ()=>SCREEN_ACCESS,
    "SESSION_INFO",
    ()=>SESSION_INFO,
    "TENANT_ID",
    ()=>TENANT_ID,
    "THEME",
    ()=>THEME,
    "TOKEN",
    ()=>TOKEN,
    "TRANS",
    ()=>TRANS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const APP_ID = "AS";
const TOKEN = "TOKEN";
const SESSION_INFO = "SESSION_INFO";
const GOOGLE_ACCESS_TOKEN = "GOOGLE_ACCESS_TOKEN";
const NAV = "NAV";
const SCREEN_ACCESS = "SCREEN_ACCESS";
const TENANT_ID = "TENANT_ID";
const LANG = "LANG";
const THEME = "THEME";
const TRANS = "TRANS";
const DIR = "DIR";
const setData = (setName, setObject, isLocal = false)=>{
    const name = APP_ID + "-" + setName;
    let data = "";
    if (setObject) {
        data = typeof setObject === "string" ? setObject : JSON.stringify(setObject);
    }
    if (isLocal) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
};
const getData = (getName, isLocal = false)=>{
    getName = APP_ID + "-" + getName;
    let data = null;
    if (isLocal) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    if (data) {
        data = data.indexOf("{") > -1 || data.indexOf("[") > -1 ? JSON.parse(data) : data;
    }
    return data;
};
const removeData = (key, isLocal = false)=>{
    key = APP_ID + "-" + key;
    if (isLocal) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
};
const clearData = ()=>{
    const user = getData("remember-me", true);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (user != null) {
        setData("remember-me", user, true);
    }
    return;
};
const envData = (key)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
};
const AppStorage = {
    getData,
    setData,
    removeData,
    clearData,
    envData
};
const __TURBOPACK__default__export__ = AppStorage;
}),
"[project]/Documents/react-project/timesheet/utils/app.router.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRouter",
    ()=>AppRouter,
    "NonAuthRoutes",
    ()=>NonAuthRoutes
]);
const AppRouter = {
    DEFAULT: "",
    SIGN_UP: "/auth/signup",
    HOME: "/",
    SIGN_IN: "/auth/login",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/resetpassword",
    DASHBOARD: "/dashboard",
    PROFILE: "/profile",
    SETTINGS: "/settings",
    MENU_ACCESS: "/menu-access",
    MENU_MANAGEMENT: "/menu-management"
};
const NonAuthRoutes = [
    AppRouter.DEFAULT,
    AppRouter.HOME,
    AppRouter.SIGN_IN,
    AppRouter.FORGOT_PASSWORD,
    AppRouter.RESET_PASSWORD,
    AppRouter.SETTINGS,
    AppRouter.MENU_ACCESS,
    AppRouter.MENU_MANAGEMENT
];
}),
"[project]/Documents/react-project/timesheet/config/site-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/config/siteConfig.ts
__turbopack_context__.s([
    "SiteConfig",
    ()=>SiteConfig
]);
const SiteConfig = [
    {
        active: true,
        children: [
            {
                active: true,
                href: "/home/dashboard",
                icon: "LayoutDashboard",
                id: "ADMIN_DASHBOARD_DASHBOARD",
                menuId: "ADMIN_DASHBOARD",
                name: "Dashboard",
                nameLang: {
                    "en-US": "Dashboard",
                    "hi-IN": "डैशबोर्ड",
                    "kn-IN": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
                    "ml-IN": "ഡാഷ്ബോർഡ്",
                    "ta-IN": "டாஷ்போர்டு",
                    "te-IN": "డాష్‌బోర్డ్"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/home/admin",
                icon: "ShieldCheck",
                id: "ADMIN_DASHBOARD_ADMIN",
                menuId: "ADMIN_DASHBOARD",
                name: "Admin",
                nameLang: {
                    "en-US": "Admin",
                    "hi-IN": "व्यवस्थापक",
                    "kn-IN": "ನಿರ್ವಾಹಕ",
                    "ml-IN": "അഡ്മിൻ",
                    "ta-IN": "நிர்வாகி",
                    "te-IN": "నిర్వాహకుడు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/home/user-activities",
                icon: "Activity",
                id: "ADMIN_DASHBOARD_USER_ACTIVITIES",
                menuId: "ADMIN_DASHBOARD",
                name: "User Activities",
                nameLang: {
                    "en-US": "User Activities",
                    "hi-IN": "उपयोगकर्ता गतिविधियाँ",
                    "kn-IN": "ಬಳಕೆದಾರ ಚಟುವಟಿಕೆಗಳು",
                    "ml-IN": "ഉപയോക്തൃ പ്രവർത്തനങ്ങൾ",
                    "ta-IN": "பயனர் செயல்பாடுகள்",
                    "te-IN": "వినియోగదారు కార్యకలాపాలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/support/chat",
                icon: "MessageCircle",
                id: "ADMIN_SUPPORT_CHATS",
                menuId: "ADMIN_SUPPORT",
                name: "Chats",
                nameLang: {
                    "en-US": "User Chats",
                    "hi-IN": "उपयोगकर्ता चैट",
                    "kn-IN": "ಬಳಕೆದಾರ ಚಾಟ್‌ಗಳು",
                    "ml-IN": "ഉപയോക്തൃ ചാറ്റുകൾ",
                    "ta-IN": "பயனர் அரட்டைகள்",
                    "te-IN": "వినియోగదారు చాట్లు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/reports/transactions",
                icon: "CreditCard",
                id: "ADMIN_REPORTS_TRANSACTIONS",
                menuId: "ADMIN_REPORTS",
                name: "Transactions",
                nameLang: {
                    "en-US": "User Transactions",
                    "hi-IN": "उपयोगकर्ता लेन-देन",
                    "kn-IN": "ಬಳಕೆದಾರ ವಹಿವಾಟುಗಳು",
                    "ml-IN": "ഉപയോക്തൃ ഇടപാടുകൾ",
                    "ta-IN": "பயனர் பரிவர்த்தனைகள்",
                    "te-IN": "వినియోగదారు లావాదేవీలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            }
        ],
        icon: "LayoutDashboard",
        id: "ADMIN_DASHBOARD",
        name: "Dashboard",
        nameLang: {
            "en-US": "Dashboard",
            "hi-IN": "डैशबोर्ड",
            "kn-IN": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "ml-IN": "ഡാഷ്ബോർഡ്",
            "ta-IN": "டாஷ்போர்டு",
            "te-IN": "డాష్‌బోర్డ్"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/profile/users",
                icon: "Users",
                id: "ADMIN_PROFILE_USERS",
                menuId: "ADMIN_PROFILE",
                name: "Users",
                nameLang: {
                    "en-US": "Users",
                    "hi-IN": "उपयोगकर्ता",
                    "kn-IN": "ಬಳಕೆದಾರರು",
                    "ml-IN": "ഉപയോക്താക്കൾ",
                    "ta-IN": "பயனர்கள்",
                    "te-IN": "వినియోగదారులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/profile/astrologers",
                icon: "Star",
                id: "ADMIN_PROFILE_ASTROLOGERS",
                menuId: "ADMIN_PROFILE",
                name: "Astrologers",
                nameLang: {
                    "en-US": "Astrologers",
                    "hi-IN": "ज्योतिषी",
                    "kn-IN": "ಜ್ಯೋತಿಷಿಗಳು",
                    "ml-IN": "ജ്യോതിഷികൾ",
                    "ta-IN": "ஜோதிடர்கள்",
                    "te-IN": "జ్యోతిష్కులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/profile/staff",
                icon: "CircleUser",
                id: "ADMIN_PROFILE_STAFF",
                menuId: "ADMIN_PROFILE",
                name: "Staff",
                nameLang: {
                    "en-US": "Staff",
                    "hi-IN": "स्टाफ़",
                    "kn-IN": "ಸಿಬ್ಬಂದಿ",
                    "ml-IN": "സ്റ്റാഫ്",
                    "ta-IN": "பணியாளர்கள்",
                    "te-IN": "సిబ్బంది"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            }
        ],
        icon: "UserStar",
        id: "ADMIN_PROFILE",
        name: "Profile",
        nameLang: {
            "en-US": "Profile",
            "hi-IN": "प्रोफ़ाइल",
            "kn-IN": "ಪ್ರೊಫೈಲ್",
            "ml-IN": "പ്രൊഫൈൽ",
            "ta-IN": "சுயவிவரம்",
            "te-IN": "ప్రొఫైల్"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/menu/menu-links",
                icon: "Link",
                id: "ADMIN_MENU_LINK",
                menuId: "ADMIN_MENU",
                name: "Menu Links",
                nameLang: {
                    "en-US": "Menu Links",
                    "hi-IN": "मेनू लिंक्स",
                    "kn-IN": "ಮೆನು ಲಿಂಕ್ಸ್",
                    "ml-IN": "മെനു ലിങ്കുകൾ",
                    "ta-IN": "மெனு இணுப்புகள்",
                    "te-IN": "మెనూ లింకులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/menu/menu-access",
                icon: "Key",
                id: "ADMIN_MENU_ACCESS",
                menuId: "ADMIN_MENU",
                name: "Menu Access",
                nameLang: {
                    "en-US": "Menu Access",
                    "hi-IN": "मेनू एक्सेस",
                    "kn-IN": "ಮೆನು ಪ್ರಾಪ್ತಿ",
                    "ml-IN": "മെനു ആക്‌സസ്",
                    "ta-IN": "மெனு அணுகல்",
                    "te-IN": "మెనూ యాక్సెస్"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/menu/roles",
                icon: "CircleUser",
                id: "ADMIN_MENU_ROLE",
                menuId: "ADMIN_MENU",
                name: "Roles",
                nameLang: {
                    "en-US": "Roles",
                    "hi-IN": "भूमिकाएँ",
                    "kn-IN": "ಪಾತ್ರಗಳು",
                    "ml-IN": "റോളുകൾ",
                    "ta-IN": "பாத்திரங்கள்",
                    "te-IN": "పాత్రలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            }
        ],
        icon: "Menu",
        id: "ADMIN_MENU",
        name: "Menu",
        nameLang: {
            "en-US": "Menu",
            "hi-IN": "मेनू",
            "kn-IN": "ಮೆನು",
            "ml-IN": "മെനു",
            "ta-IN": "மெனு",
            "te-IN": "మెనూ"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/horoscope/zodiac-signs",
                icon: "Circle",
                id: "ADMIN_HOROSCOPE_ZODIAC_SIGNS",
                menuId: "ADMIN_HOROSCOPE",
                name: "Zodiac Signs",
                nameLang: {
                    "en-US": "Zodiac Signs",
                    "hi-IN": "राशियाँ",
                    "kn-IN": "ರಾಶಿಚಕ್ರಗಳು",
                    "ml-IN": "രാശികൾ",
                    "ta-IN": "இராசிகள்",
                    "te-IN": "రాశులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/horoscope/daily",
                icon: "Sun",
                id: "ADMIN_HOROSCOPE_DAILY",
                menuId: "ADMIN_HOROSCOPE",
                name: "Daily",
                nameLang: {
                    "en-US": "Daily",
                    "hi-IN": "दैनिक",
                    "kn-IN": "ದೈನಂದಿನ",
                    "ml-IN": "ദൈനംദിനം",
                    "ta-IN": "தினசரி",
                    "te-IN": "రోజువారీ"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/horoscope/weekly",
                icon: "Calendar",
                id: "ADMIN_HOROSCOPE_WEEKLY",
                menuId: "ADMIN_HOROSCOPE",
                name: "Weekly",
                nameLang: {
                    "en-US": "Weekly",
                    "hi-IN": "साप्ताहिक",
                    "kn-IN": "ವಾರದ",
                    "ml-IN": "ആഴ്ചതോറും",
                    "ta-IN": "வாராந்திர",
                    "te-IN": "వారాంతపు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/horoscope/monthly",
                icon: "CalendarDays",
                id: "ADMIN_HOROSCOPE_MONTHLY",
                menuId: "ADMIN_HOROSCOPE",
                name: "Monthly",
                nameLang: {
                    "en-US": "Monthly",
                    "hi-IN": "मासिक",
                    "kn-IN": "ಮಾಸಿಕ",
                    "ml-IN": "മാസിക",
                    "ta-IN": "மாதாந்திர",
                    "te-IN": "నెలసరి"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 4,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/horoscope/yearly",
                icon: "BookOpen",
                id: "ADMIN_HOROSCOPE_YEARLY",
                menuId: "ADMIN_HOROSCOPE",
                name: "Yearly",
                nameLang: {
                    "en-US": "Yearly",
                    "hi-IN": "वार्षिक",
                    "kn-IN": "ವಾರ್ಷಿಕ",
                    "ml-IN": "വാർഷികം",
                    "ta-IN": "ஆண்டு",
                    "te-IN": "ఏటా"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 5,
                type: "ADMIN"
            }
        ],
        icon: "Star",
        id: "ADMIN_HOROSCOPE",
        module: "ADMIN_HOROSCOPE",
        name: "Horoscope",
        nameLang: {
            "en-US": "Horoscope",
            "hi-IN": "राशिफल",
            "kn-IN": "ರಾಶಿಭವಿಷ್ಯ",
            "ml-IN": "ജാതകം",
            "ta-IN": "ஜாதகம்",
            "te-IN": "రాశిఫలాలు"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/auspicious/names",
                icon: "FileText",
                id: "ADMIN_AUSPICIOUS_NAMES",
                menuId: "ADMIN_AUSPICIOUS",
                name: "Names",
                nameLang: {
                    "en-US": "Names",
                    "hi-IN": "नाम",
                    "kn-IN": "ಹೆಸರುಗಳು",
                    "ml-IN": "പേരുകൾ",
                    "ta-IN": "பெயர்கள்",
                    "te-IN": "పేర్లు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/auspicious/timings",
                icon: "Clock",
                id: "ADMIN_AUSPICIOUS_TIMINGS",
                menuId: "ADMIN_AUSPICIOUS",
                name: "Timings",
                nameLang: {
                    "en-US": "Timings",
                    "hi-IN": "समय",
                    "kn-IN": "ಸಮಯಗಳು",
                    "ml-IN": "സമയം",
                    "ta-IN": "நேரம்",
                    "te-IN": "సమయాలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            }
        ],
        icon: "Sun",
        id: "ADMIN_AUSPICIOUS",
        module: "ADMIN_AUSPICIOUS",
        name: "Auspicious",
        nameLang: {
            "en-US": "Auspicious",
            "hi-IN": "शुभ",
            "kn-IN": "ಶುಭ",
            "ml-IN": "ശുഭ",
            "ta-IN": "சுப",
            "te-IN": "శుభం"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/services/poojas",
                icon: "Flower2",
                id: "ADMIN_SERVICES_POOJAS",
                menuId: "ADMIN_SERVICES",
                name: "Poojas",
                nameLang: {
                    "en-US": "Poojas",
                    "hi-IN": "पूजा",
                    "kn-IN": "ಪೂಜೆಗಳು",
                    "ml-IN": "പൂജകൾ",
                    "ta-IN": "பூஜைகள்",
                    "te-IN": "పూజలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            }
        ],
        icon: "Briefcase",
        id: "ADMIN_SERVICES",
        module: "ADMIN_SERVICES",
        name: "Services",
        nameLang: {
            "en-US": "Services",
            "hi-IN": "सेवाएं",
            "kn-IN": "ಸೇವೆಗಳು",
            "ml-IN": "സേവനങ്ങൾ",
            "ta-IN": "சேவைகள்",
            "te-IN": "సేవలు"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/activities/mantras",
                icon: "Music",
                id: "ADMIN_ACTIVITIES_MANTRAS",
                menuId: "ADMIN_ACTIVITIES",
                name: "Mantras",
                nameLang: {
                    "en-US": "Mantras",
                    "hi-IN": "मंत्र",
                    "kn-IN": "ಮಂತ್ರಗಳು",
                    "ml-IN": "മന്ത്രങ്ങൾ",
                    "ta-IN": "மந்திரங்கள்",
                    "te-IN": "మంత్రాలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/activities/donations",
                icon: "HandHeart",
                id: "ADMIN_ACTIVITIES_DONATIONS",
                menuId: "ADMIN_ACTIVITIES",
                name: "Donations",
                nameLang: {
                    "en-US": "Donations",
                    "hi-IN": "दान",
                    "kn-IN": "ದೇಣಿಗೆಗಳು",
                    "ml-IN": "സംഭാവനകൾ",
                    "ta-IN": "நன்கொடைகள்",
                    "te-IN": "విరాళాలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/activities/poojas",
                icon: "Flower2",
                id: "ADMIN_ACTIVITIES_POOJAS",
                menuId: "ADMIN_ACTIVITIES",
                name: "Poojas",
                nameLang: {
                    "en-US": "Poojas",
                    "hi-IN": "पूजा",
                    "kn-IN": "ಪೂಜೆಗಳು",
                    "ml-IN": "പൂജകൾ",
                    "ta-IN": "பூஜைகள்",
                    "te-IN": "పూజలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            }
        ],
        icon: "Activity",
        id: "ADMIN_ACTIVITIES",
        module: "ADMIN_ACTIVITIES",
        name: "Activities",
        nameLang: {
            "en-US": "Activities",
            "hi-IN": "गतिविधियाँ",
            "kn-IN": "ಚಟುವಟಿಕೆಗಳು",
            "ml-IN": "പ്രവർത്തനങ്ങൾ",
            "ta-IN": "செயல்பாடுகள்",
            "te-IN": "కార్యకలాపాలు"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/reports/users",
                icon: "Users",
                id: "ADMIN_REPORTS_USERS",
                menuId: "ADMIN_REPORTS",
                name: "Users",
                nameLang: {
                    "en-US": "Users",
                    "hi-IN": "उपयोगकर्ता",
                    "kn-IN": "ಬಳಕೆದಾರರು",
                    "ml-IN": "ഉപയോക്താക്കൾ",
                    "ta-IN": "பயனர்கள்",
                    "te-IN": "వినియోగదారులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/reports/astrologers",
                icon: "Star",
                id: "ADMIN_REPORTS_ASTROLOGERS",
                menuId: "ADMIN_REPORTS",
                name: "Astrologers",
                nameLang: {
                    "en-US": "Astrologers",
                    "hi-IN": "ज्योतिषी",
                    "kn-IN": "ಜ್ಯೋತಿಷಿಗಳು",
                    "ml-IN": "ജ്യോതിഷികൾ",
                    "ta-IN": "ஜோதிடர்கள்",
                    "te-IN": "జ్యోతిష్కులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            }
        ],
        icon: "ChartColumnBig",
        id: "ADMIN_REPORTS",
        module: "ADMIN_REPORTS",
        name: "Reports",
        nameLang: {
            "en-US": "Reports",
            "hi-IN": "रिपोर्ट",
            "kn-IN": "ವರದಿಗಳು",
            "ml-IN": "റിപ്പോർട്ടുകൾ",
            "ta-IN": "அறிக்கைகள்",
            "te-IN": "నివేదికలు"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/settings/subscription-plans",
                icon: "CreditCard",
                id: "ADMIN_SETTINGS_SUBSCRIPTION_PLANS",
                menuId: "ADMIN_SETTINGS",
                name: "Subscription Plans",
                nameLang: {
                    "en-US": "Subscription Plans",
                    "hi-IN": "सदस्यता योजनाएं",
                    "kn-IN": "ಚಂದಾದಾರಿಕೆ ಯೋಜನೆಗಳು",
                    "ml-IN": "സബ്സ്ക്രിപ്ഷൻ പ്ലാനുകൾ",
                    "ta-IN": "சந்தா திட்டங்கள்",
                    "te-IN": "సబ్‌స్క్రిప్షన్ ప్లాన్‌లు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/settings/shipping-charges",
                icon: "Truck",
                id: "ADMIN_SETTINGS_SHIPPING_CHARGES",
                menuId: "ADMIN_SETTINGS",
                name: "Shipping Charges",
                nameLang: {
                    "en-US": "Shipping Charges",
                    "hi-IN": "शिपिंग शुल्क",
                    "kn-IN": "ಸಾಗಾಟ ಶುಲ್ಕ",
                    "ml-IN": "ഷിപ്പിംഗ് ചാർജുകൾ",
                    "ta-IN": "கப்பல் கட்டணங்கள்",
                    "te-IN": "రవాణా ఖర్చులు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/settings/notifications",
                icon: "Bell",
                id: "ADMIN_SETTINGS_NOTIFICATIONS",
                menuId: "ADMIN_SETTINGS",
                name: "Notifications",
                nameLang: {
                    "en-US": "Notifications",
                    "hi-IN": "सूचनाएं",
                    "kn-IN": "ಅಧಿಸೂಚನೆಗಳು",
                    "ml-IN": "അറിയിപ്പുകൾ",
                    "ta-IN": "அறிவிப்புகள்",
                    "te-IN": "నోటిఫికేషన్‌లు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 3,
                type: "ADMIN"
            }
        ],
        icon: "Settings",
        id: "ADMIN_SETTINGS",
        module: "ADMIN_SETTINGS",
        name: "Settings",
        nameLang: {
            "en-US": "Settings",
            "hi-IN": "सेटिंग्स",
            "kn-IN": "ಸಂಯೋಜನೆಗಳು",
            "ml-IN": "ക്രമീകരണങ്ങൾ",
            "ta-IN": "அமைப்புகள்",
            "te-IN": "సెట్టింగ్స్"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/support/contact-us",
                icon: "Phone",
                id: "ADMIN_SUPPORT_CONTACT_US",
                menuId: "ADMIN_SUPPORT",
                name: "Contact Us",
                nameLang: {
                    "en-US": "Contact Us",
                    "hi-IN": "संपर्क करें",
                    "kn-IN": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
                    "ml-IN": "ബന്ധപ്പെടുക",
                    "ta-IN": "எங்களை தொடர்பு கொள்ளவும்",
                    "te-IN": "మమ్మల్ని సంప్రదించండి"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            }
        ],
        icon: "Headset",
        id: "ADMIN_SUPPORT",
        module: "ADMIN_SUPPORT",
        name: "Support",
        nameLang: {
            "en-US": "Support",
            "hi-IN": "सहायता",
            "kn-IN": "ಬೆಂಬಲ",
            "ml-IN": "പിന്തുണ",
            "ta-IN": "ஆதரவு",
            "te-IN": "మద్దతు"
        },
        type: "ADMIN"
    },
    {
        active: true,
        children: [
            {
                active: true,
                href: "/application-data/testimonials",
                icon: "Quote",
                id: "ADMIN_APPLICATION_DATA_TESTIMONIALS",
                menuId: "ADMIN_APPLICATION_DATA",
                name: "Testimonials",
                nameLang: {
                    "en-US": "Testimonials",
                    "hi-IN": "प्रशंसापत्र",
                    "kn-IN": "ಸಾಕ್ಷ್ಯಗಳು",
                    "ml-IN": "സാക്ഷ്യങ്ങൾ",
                    "ta-IN": "சான்றுகள்",
                    "te-IN": "ప్రశంసలు"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 1,
                type: "ADMIN"
            },
            {
                active: true,
                href: "/application-data/site-info",
                icon: "Globe",
                id: "ADMIN_APPLICATION_DATA_SITE_INFO",
                menuId: "ADMIN_APPLICATION_DATA",
                name: "Site Info",
                nameLang: {
                    "en-US": "Site Info",
                    "hi-IN": "साइट जानकारी",
                    "kn-IN": "ಸೈಟ್ ಮಾಹಿತಿ",
                    "ml-IN": "സൈറ്റ് വിവരം",
                    "ta-IN": "தளத் தகவல்",
                    "te-IN": "సైట్ సమాచారం"
                },
                permissions: {
                    create: true,
                    delete: true,
                    read: true,
                    update: true
                },
                priority: 2,
                type: "ADMIN"
            }
        ],
        icon: "Database",
        id: "ADMIN_APPLICATION_DATA",
        module: "ADMIN_APPLICATION_DATA",
        name: "Application Data",
        nameLang: {
            "en-US": "Application Data",
            "hi-IN": "एप्लिकेशन डेटा",
            "kn-IN": "ಅನ್ವಯ ಡೇಟಾ",
            "ml-IN": "അപ്ലിക്കേഷൻ ഡാറ്റ",
            "ta-IN": "பயன்பாட்டு தரவு",
            "te-IN": "అప్లికేషన్ డేటా"
        },
        type: "ADMIN"
    }
];
}),
"[project]/Documents/react-project/timesheet/utils/app.util.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalizeFirstLetter",
    ()=>capitalizeFirstLetter,
    "checkLoginUser",
    ()=>checkLoginUser,
    "combineDateAndTime",
    ()=>combineDateAndTime,
    "convertTo24HourFormat",
    ()=>convertTo24HourFormat,
    "debounce",
    ()=>debounce,
    "formatDateTime",
    ()=>formatDateTime,
    "monthNames",
    ()=>monthNames,
    "screenAccessCall",
    ()=>screenAccessCall,
    "screenAccessInit",
    ()=>screenAccessInit,
    "timeAgo",
    ()=>timeAgo,
    "truncateString",
    ()=>truncateString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/config/site-config.ts [app-ssr] (ecmascript)");
;
;
;
const formatDateTime = (timestamp, showDate = true, showTime)=>{
    const newDate = new Date(timestamp);
    const months = monthNames();
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    let hours = newDate.getHours();
    const minutes = String(newDate.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const date = showDate ? `${day} ${month} ${year}` : "";
    const time = showTime ? `${hours}:${minutes} ${ampm}` : "";
    return `${date} ${time}`;
};
const convertTo24HourFormat = (time)=>{
    const [timeStr, modifier] = time.split(" ");
    const [hoursStr, minutesStr] = timeStr.split(":");
    let hours = Number(hoursStr);
    const minutes = Number(minutesStr);
    if (modifier === "AM") {
        if (hours === 12) hours = 0;
    } else if (modifier === "PM") {
        if (hours !== 12) hours += 12;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
};
const combineDateAndTime = (dateString, timeString)=>{
    if (!dateString) return null;
    const validTimeString = timeString || "00:00:00";
    const combined = new Date(`${dateString}T${validTimeString}Z`);
    return isNaN(combined.getTime()) ? null : combined;
};
const timeAgo = (date)=>{
    const now = new Date().getTime();
    const diff = now - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (days > 1) return `${days} days ago`;
    if (days === 1) return "1 day ago";
    if (hours > 1) return `${hours} hours ago`;
    if (hours === 1) return "1 hour ago";
    if (minutes > 1) return `${minutes} minutes ago`;
    if (minutes === 1) return "1 minute ago";
    return "Just now";
};
const monthNames = ()=>[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
const capitalizeFirstLetter = (str)=>{
    return str.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
};
const truncateString = (input, maxLength)=>{
    if (input?.length > maxLength) {
        return input.substring(0, maxLength) + "...";
    }
    return input;
};
const debounce = (func, wait)=>{
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
};
const checkLoginUser = ()=>{
    const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"]);
    // const current_time = new Date().getTime() / 1000;
    // || current_time > decoded.exp
    if (!decoded) {
        return false;
    } else {
        return true;
    }
};
let accessList = {};
const screenAccessInit = ()=>{
    accessList = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteConfig"].forEach((item)=>{
        if (item.children && item.children.length > 0) {
            item.children.forEach((child)=>{
                if (child.href) {
                    accessList[child.href] = {
                        name: child.name,
                        read: child.permissions?.read ?? false,
                        create: child.permissions?.create ?? false,
                        update: child.permissions?.update ?? false,
                        delete: child.permissions?.delete ?? false
                    };
                }
            });
        } else if (item.href) {
            accessList[item.href] = {
                name: item.name,
                read: item.permissions?.read ?? false,
                create: item.permissions?.create ?? false,
                update: item.permissions?.update ?? false,
                delete: item.permissions?.delete ?? false
            };
        }
    });
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const screenAccessCall = (key)=>{
    const access = accessList[key] || {
        name: "none",
        read: true,
        create: true,
        update: true,
        delete: true
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenAccess"].value = access;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCREEN_ACCESS"], __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenAccess"].value);
};
}),
"[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckSession",
    ()=>CheckSession,
    "CloseModal",
    ()=>CloseModal,
    "ModalState",
    ()=>ModalState,
    "ProgressBar",
    ()=>ProgressBar,
    "RouterChange",
    ()=>RouterChange,
    "RouterEvent",
    ()=>RouterEvent,
    "ScreenAccess",
    ()=>ScreenAccess,
    "SessionLang",
    ()=>SessionLang,
    "SessionToken",
    ()=>SessionToken,
    "ShowLoader",
    ()=>ShowLoader,
    "ShowModal",
    ()=>ShowModal,
    "ShowToast",
    ()=>ShowToast,
    "ThemeMode",
    ()=>ThemeMode,
    "ToastMessage",
    ()=>ToastMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$util$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.util.ts [app-ssr] (ecmascript)");
;
;
;
;
const ScreenAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$util$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["screenAccessInit"])();
const RouterEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({});
const SessionToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"]) || null);
const SessionLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANG"]) || "en-US");
const ThemeMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])("light");
const RouterChange = (pathname, query)=>{
    RouterEvent.value = {
        pathname,
        query
    };
    if (pathname == __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppRouter"].SIGN_IN) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].removeData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"]);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].removeData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SESSION_INFO"]);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].removeData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GOOGLE_ACCESS_TOKEN"], true);
    }
};
const ProgressBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(false);
const ShowLoader = (show)=>{
    ProgressBar.value = show;
};
const ToastMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({
    show: false,
    message: "",
    type: "success",
    title: "success",
    placement: "top-center",
    variant: "flat",
    duration: 3000
});
const ShowToast = (message, type = "warning")=>{
    ToastMessage.value = {
        show: true,
        message,
        type
    };
};
const ModalState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])({
    show: false,
    title: "",
    body: "",
    primaryAction: {
        label: "",
        action: ()=>{}
    },
    secondaryAction: {
        label: "",
        action: ()=>{}
    }
});
const ShowModal = (modalConfig)=>{
    ModalState.value = {
        show: true,
        title: modalConfig.title || "",
        body: modalConfig.body || "",
        primaryAction: modalConfig.primaryAction || {
            label: "",
            action: ()=>{
                if (modalConfig.primaryAction?.action) {
                    modalConfig.primaryAction.action();
                }
                CloseModal();
            }
        },
        secondaryAction: modalConfig.secondaryAction || {
            label: "",
            action: ()=>{}
        }
    };
};
const CloseModal = ()=>{
    ModalState.value = {
        show: false,
        title: "",
        body: "",
        primaryAction: {
            label: "",
            action: ()=>{}
        },
        secondaryAction: {
            label: "",
            action: ()=>{}
        }
    };
};
const CheckSession = ()=>{
    SessionToken.value = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN"]) || null;
};
}),
"[project]/Documents/react-project/timesheet/components/router-listener.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouterListener",
    ()=>RouterListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const RouterListener = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignals"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dispose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(()=>{
            const { pathname, query } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterEvent"].value;
            if (pathname) {
                // Construct URL with query params if they exist
                let url = pathname;
                if (query && Object.keys(query).length > 0) {
                    const searchParams = new URLSearchParams(query);
                    url = `${pathname}?${searchParams.toString()}`;
                }
                router.push(url);
                // Reset the signal to avoid redundant push on re-render
                // However, we need to be careful not to trigger another effect if we use value directly
                // Usually, setting it to {} is safe if we check for pathname
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterEvent"].peek().pathname = '';
            }
        });
        return ()=>dispose();
    }, [
        router
    ]);
    return null;
};
}),
"[project]/Documents/react-project/timesheet/types/type.icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleOff$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-off.js [app-ssr] (ecmascript) <export default as CircleOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__icons$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/index.js [app-ssr] (ecmascript) <export * as icons>");
'use client';
;
;
const TypeIcon = ({ name, color, size = 24, onClick, className })=>{
    const LucideIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__icons$3e$__["icons"][name];
    const defaultClassName = 'cursor-pointer transition-colors duration-200';
    const combinedClassName = `${defaultClassName} ${className || ''}`;
    if (!LucideIcon) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleOff$3e$__["CircleOff"], {
            color: color || 'lightslategray',
            size: size,
            className: combinedClassName
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/types/type.icon.tsx",
            lineNumber: 22,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LucideIcon, {
        className: combinedClassName,
        color: color,
        size: size,
        onClick: onClick
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/types/type.icon.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TypeIcon;
}),
"[project]/Documents/react-project/timesheet/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Navbar = ({ onToggle })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignals"])();
    const [isSettingsOpen, setIsSettingsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const handleLogout = async ()=>{
        // await logout(); // Implement logout logic
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppRouter"].SIGN_IN);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar bg-white dark:bg-black shadow-sm border-b border-base-200 px-2 lg:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-none lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-square btn-ghost",
                                        onClick: onToggle,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            className: "inline-block w-5 h-5 stroke-current",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 cursor-pointer",
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppRouter"].DASHBOARD),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                alt: "Antweb logo",
                                                src: "/assets/antweb_logo.png",
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-[#8fa4bc] tracking-wide",
                                            children: "Antweb"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "text-secondary",
                                        name: "Settings",
                                        onClick: ()=>setIsSettingsOpen(true)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionToken"].value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        name: "LogOut",
                                        onClick: handleLogout,
                                        className: "text-secondary mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionToken"].value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-secondary text-white text-xs font-montserrat-medium rounded-full px-4 py-2 hover:bg-blue-700 transition h-auto min-h-0 mr-2",
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppRouter"].SIGN_IN),
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSettingsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                className: "modal modal-open",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContent, {}, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-action",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: ()=>setIsSettingsOpen(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        method: "dialog",
                        className: "modal-backdrop",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsSettingsOpen(false),
                            children: "close"
                        }, void 0, false, {
                            fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/react-project/timesheet/components/navbar.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
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
"[project]/Documents/react-project/timesheet/i18n/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "languages",
    ()=>languages,
    "resources",
    ()=>resources,
    "trans",
    ()=>trans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
// Import JSON translation files
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$en$2d$US$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/en-US.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$hi$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/hi-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$kn$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/kn-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$ml$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/ml-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$ta$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/ta-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$locales$2f$te$2d$IN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/locales/te-IN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
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
const storedLang = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANG"]) || "en-US";
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
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
__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on("languageChanged", (lng)=>{
    try {
        const dir = languages.find((l)=>l.code === lng)?.dir || "ltr";
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIR"], dir);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANG"], lng);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionLang"].value = lng;
        if (lng in resources) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRANS"], resources[lng].translation);
        }
    } catch (error) {
        console.error("Language change error", error);
    }
});
const trans = (nameLang, defaultName)=>{
    let val = nameLang ? nameLang[__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionLang"].value] : defaultName;
    return val === undefined || val === null || val.trim() === "" ? defaultName : val;
};
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Documents/react-project/timesheet/types/type.button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.icon.tsx [app-ssr] (ecmascript)");
;
;
const TypeButton = ({ name, label, onPress, htmlType = 'button', variant = 'solid', action = 'primary', className = '', disabled = false, isLoading = false, style })=>{
    // Map action to DaisyUI colors
    const colorClass = action === 'primary' ? 'btn-primary' : action === 'secondary' ? 'btn-secondary' : action === 'success' ? 'btn-success' : action === 'danger' ? 'btn-error' : action === 'warning' ? 'btn-warning' : action === 'info' ? 'btn-info' : action === 'accent' ? 'btn-accent' : 'btn-neutral';
    // Map variant to DaisyUI styles
    const variantClass = variant === 'bordered' || variant === 'outline' ? 'btn-outline' : variant === 'ghost' ? 'btn-ghost' : variant === 'light' ? 'btn-ghost' // Approximating light/flat to ghost or soft
     : variant === 'flat' ? 'btn-ghost bg-opacity-20' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: htmlType,
        onClick: onPress,
        disabled: disabled || isLoading,
        style: style,
        className: `btn ${colorClass} ${variantClass} ${className}`,
        children: [
            !isLoading && name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                name: name,
                size: 18
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.button.tsx",
                lineNumber: 76,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.button.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "loading loading-dots loading-sm"
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.button.tsx",
                lineNumber: 78,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/types/type.button.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TypeButton;
}),
"[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonMenu",
    ()=>SkeletonMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SkeletonMenu = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: Array.from({
                length: 5
            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 w-5 bg-gray-400 rounded animate-pulse flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                                    lineNumber: 9,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-400 rounded animate-pulse flex-1 max-w-[120px] sm:max-w-[160px]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 w-3 bg-gray-400 rounded animate-pulse flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 pl-8 space-y-2",
                            children: Array.from({
                                length: 5
                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-4 bg-gray-300 rounded animate-pulse flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 bg-gray-300 rounded animate-pulse flex-1 max-w-[100px] sm:max-w-[140px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
            lineNumber: 4,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/react-project/timesheet/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "menuAccessCall",
    ()=>menuAccessCall,
    "menuAccessData",
    ()=>menuAccessData,
    "menuAccessIsLoading",
    ()=>menuAccessIsLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$pro$2d$sidebar$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-pro-sidebar/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2f$dist$2f$signals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals/dist/signals.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/i18n/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/config/site-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$skeleton$2f$skeleton$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/skeleton/skeleton-menu.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
const hexToRgba = (hex, alpha)=>{
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const menuAccessIsLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])(false);
const menuAccessData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signal"])([]);
const menuAccessCall = async ()=>{
    try {
        menuAccessIsLoading.value = true;
        // const url = AppHttp.MsUrl.main + "/";
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        const resp = await Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteConfig"]);
        menuAccessData.value = resp;
    } finally{
        menuAccessIsLoading.value = false;
    }
};
const Sidebar = ({ isOpen = false, onToggle })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignals"])();
    const [theme, setTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("dark");
    const [toggled, setToggled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setToggled(isOpen);
    }, [
        isOpen
    ]);
    const handleToggle = ()=>{
        setToggled(!toggled);
        onToggle();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effect"])(()=>setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeMode"].value === "light" ? "light" : "dark"));
        menuAccessCall();
    }, []);
    function handleMenu(href) {
        handleToggle();
        if (!href) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterChange"])(href, {});
    }
    // Define menu item styles based on the current theme
    const menuItemStyles = {
        button: ({ active, disabled })=>{
            const baseBackgroundColor = themes[theme].menu.menuContent;
            return {
                color: disabled ? themes[theme].menu.disabled.color : themes[theme].menu.color,
                backgroundColor: active ? themes[theme].menu.hover.backgroundColor : baseBackgroundColor,
                "&:hover": {
                    backgroundColor: themes[theme].menu.hover.backgroundColor,
                    color: themes[theme].menu.hover.color
                }
            };
        },
        subMenuContent: {
            backgroundColor: themes[theme].menu.menuContent
        },
        icon: ({ disabled })=>({
                color: disabled ? themes[theme].menu.disabled.color : themes[theme].menu.icon
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$pro$2d$sidebar$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        backgroundColor: hexToRgba(themes[theme].sidebar.backgroundColor, 0.5),
        breakPoint: "xl",
        className: "h-[calc(100vh-88px)] overflow-y-auto",
        rootStyles: {
            color: themes[theme].sidebar.color,
            backgroundColor: themes[theme].sidebar.backgroundColor,
            border: "0px solid #99a1af",
            borderRadius: "0 rem"
        },
        toggled: isOpen,
        onBackdropClick: handleToggle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarHeader, {}, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$pro$2d$sidebar$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {
                menuItemStyles: menuItemStyles,
                children: [
                    menuAccessIsLoading.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$skeleton$2f$skeleton$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonMenu"], {}, void 0, false, {
                        fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                        lineNumber: 149,
                        columnNumber: 39
                    }, ("TURBOPACK compile-time value", void 0)),
                    menuAccessData.value.map((item, index)=>{
                        // Check if the current user has read permission for this top-level item
                        const canReadParent = item.permissions?.read ?? true; // Default to true if permissions are not defined
                        // If the parent item cannot be read, don't render it or its children
                        if (!canReadParent) {
                            return null;
                        }
                        // Determine if a top-level item or any of its children are active
                        const isParentActive = item.children ? item.children.some((child)=>pathname === child.href && (child.permissions?.read ?? true)) || // Check child active only if readable
                        pathname === item.href : pathname === item.href;
                        // Render SubMenu for items with children, otherwise MenuItem
                        return item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$pro$2d$sidebar$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubMenu"], {
                                    active: isParentActive,
                                    defaultOpen: isParentActive,
                                    icon: item.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        color: "#1890ff",
                                        name: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                        lineNumber: 177,
                                        columnNumber: 21
                                    }, void 0) : undefined,
                                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trans"])(item.nameLang, item.name),
                                    children: item.children.map((child, childIndex)=>{
                                        // Check if the current user has read permission for this child item
                                        const canReadChild = child.permissions?.read ?? true; // Default to true if permissions are not defined
                                        // If the child item cannot be read, don't render it
                                        if (!canReadChild) {
                                            return null;
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$pro$2d$sidebar$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItem"], {
                                                active: pathname === child.href,
                                                icon: child.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    color: "#1890ff",
                                                    name: child.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 29
                                                }, void 0) : undefined,
                                                onClick: ()=>handleMenu(child.href),
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trans"])(child.nameLang, child.name)
                                            }, `${child.name}-${childIndex}`, false, {
                                                fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                                lineNumber: 193,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, `${child.name}-${childIndex}`, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, `${item.name}-${index}`, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-200 dark:border-gray-700 my-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `${item.name}-${index}`, true, {
                            fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-200 dark:border-gray-700 my-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$pro$2d$sidebar$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItem"], {
                                    active: pathname === item.href,
                                    icon: item.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        color: "#1890ff",
                                        name: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                        lineNumber: 219,
                                        columnNumber: 21
                                    }, void 0) : undefined,
                                    onClick: ()=>handleMenu(item.href),
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trans"])(item.nameLang, item.name)
                                }, `${item.name}-${index}`, false, {
                                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `${item.name}-${index}`, true, {
                            fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function SidebarHeader() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "sticky top-0 z-10 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 flex items-center justify-between p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold",
                    children: t("welcome")
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "-m-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        action: "primary",
                        label: "",
                        name: "LogOut",
                        variant: "ghost",
                        onPress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppRouter"].SIGN_IN)
                    }, void 0, false, {
                        fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/components/sidebar.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
const themes = {
    light: {
        sidebar: {
            backgroundColor: "#F8FAFC",
            color: "#607489"
        },
        menu: {
            fontSize: "small",
            menuContent: "#fbfcfd",
            color: "#607489",
            icon: "#0098e5",
            hover: {
                backgroundColor: "#c5e4ff",
                color: "#44596e"
            },
            disabled: {
                color: "#9fb6cf"
            }
        }
    },
    dark: {
        sidebar: {
            backgroundColor: "#000000",
            color: "#8ba1b7"
        },
        menu: {
            fontSize: "small",
            menuContent: "#000000",
            color: "#8ba1b7",
            icon: "#59d0ff",
            hover: {
                backgroundColor: "#00458b",
                color: "#b6c8d9"
            },
            disabled: {
                color: "#3e5e7e"
            }
        }
    }
};
}),
"[project]/Documents/react-project/timesheet/layouts/default-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DefaultLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/components/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.router.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function DefaultLayout({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignals"])();
    const [toggled, setToggled] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(true);
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setIsMounted(true);
    }, []);
    const isNonAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonAuthRoutes"].includes(pathname);
    const showSidebar = isMounted && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionToken"].value && !isNonAuthRoute;
    // const backgroundClass = ""; // Handled by inner layouts or global styles
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full flex flex-col h-[calc(100vh-10px)] overflow-hidden gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {
                    onToggle: ()=>setToggled(!toggled)
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/layouts/default-layout.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "container mx-auto flex-grow h-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 h-full overflow-hidden",
                        children: [
                            showSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                                isOpen: toggled,
                                onToggle: ()=>setToggled(!toggled)
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/layouts/default-layout.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-grow overflow-auto h-[calc(100vh-82px)]",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/layouts/default-layout.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/layouts/default-layout.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/layouts/default-layout.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/react-project/timesheet/layouts/default-layout.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Documents/react-project/timesheet/components/toast.comonent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/runtime/dist/runtime.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
'use client';
;
;
;
;
;
const ToastComponent = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$runtime$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignals"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value.show) {
            const timer = setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value,
                    show: false
                };
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value.show
    ]);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value.show) return null;
    const type = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value.type || 'success';
    const alertClass = type === 'danger' ? 'alert-error' : type === 'primary' ? 'alert-info' : type === 'warning' ? 'alert-warning' : 'alert-success';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "toast toast-top toast-end z-[9999]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `alert ${alertClass} text-white`,
            children: [
                type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                    lineNumber: 36,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0)),
                type === 'danger' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                    lineNumber: 37,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0)),
                (type === 'primary' || type === 'warning') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                    lineNumber: 38,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastMessage"].value.message
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/components/toast.comonent.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ToastComponent;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8b90a934._.js.map
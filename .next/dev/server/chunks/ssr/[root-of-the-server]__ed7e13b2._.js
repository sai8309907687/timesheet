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
    "GOOGLE_ACCESS_TOKEN",
    ()=>GOOGLE_ACCESS_TOKEN,
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
const THEME = "THEME";
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
(()=>{
    const e = new Error("Cannot find module '@/config/site-config'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
    SiteConfig.forEach((item)=>{
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

//# sourceMappingURL=%5Broot-of-the-server%5D__ed7e13b2._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/react-project/timesheet/utils/app.http.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiUrl",
    ()=>ApiUrl,
    "MsUrl",
    ()=>MsUrl,
    "default",
    ()=>AppHttp,
    "getTenantId",
    ()=>getTenantId,
    "hasTenant",
    ()=>hasTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-client] (ecmascript)");
;
;
const API_BASE_URL = "https://apidev.dfftech.com/api";
const getTenantId = ()=>{
    const tenantId = hasTenant();
    return typeof tenantId === "string" ? tenantId : "";
};
const hasTenant = ()=>{
    const storedTenant = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TENANT_ID"], true);
    if (storedTenant) {
        return storedTenant || false;
    }
    const envTenant = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].envData('TENANT_ID');
    if (envTenant) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TENANT_ID"], envTenant, true);
        return envTenant || false;
    }
    return false;
};
(()=>{
    const envBaseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].envData('BASE_URL');
    if (envBaseUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].API_BASE_URL = envBaseUrl;
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].API_BASE_URL = API_BASE_URL;
    }
})();
class AppHttp {
    static async Load(id, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].Get(`/load/${id}`, params, headers);
    }
    static Headers() {
        return {
            ["Content-Type"]: "application/json",
            "x-tenant-id": getTenantId(),
            // "x-token": process.env.TIMESHEET_API_TOKEN || "TEST+MY_PROJECT1+MKJWQZI1",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"])
        };
    }
    static async Get(url, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].Get(url, params, headers);
    }
    static async Post(url, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].Post(url, params, headers);
    }
    static async Put(url, id, params) {
        const headers = {
            ...AppHttp.Headers()
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].Put(url + "/" + id, params, headers);
    }
    static async Delete(url, params) {
        const headers = {
            ...AppHttp.Headers(),
            ["Content-Type"]: "application/json",
            authorization: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"], true)
        };
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Http"].Delete(url, params, headers);
    }
}
const MsUrl = {
    menuAccess: "/menu_access/search",
    // auth: "/astropeace-auth",
    base: "/timesheet-base",
    // horoscope: "/astropeace-horoscope",
    // language: "/astropeace-lang",
    // payments: "/astropeace-payments",
    account: "/timesheet-account",
    auth: "/timesheet-auth",
    sor: "/timesheet-sor",
    access: "/timesheet-access"
};
const ApiUrl = {
    menuAccess: "/menu_access/search",
    menuGroupsSearch: "/menu_groups/search",
    menuGroupsCreate: "/menu_groups/create",
    menuLinksSearch: "/menu_links/search",
    menuLinksCreate: "/menu_links/create",
    menuRolesSearch: "/menu_roles/search",
    menuRolesCreate: "/menu_roles/create",
    menuAccessBulkCreate: "/menu_access/bulk-create"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/modules/auth/common/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnabledButtons",
    ()=>EnabledButtons,
    "ForgotPasswordOtpType",
    ()=>ForgotPasswordOtpType,
    "ForgotSerice",
    ()=>ForgotSerice,
    "LoggedInUserId",
    ()=>LoggedInUserId,
    "SignUpSignal",
    ()=>SignUpSignal,
    "forgotPasswordService",
    ()=>forgotPasswordService,
    "isSinginLoading",
    ()=>isSinginLoading,
    "onSingin",
    ()=>onSingin,
    "resetPasswordService",
    ()=>resetPasswordService,
    "signUpSerice",
    ()=>signUpSerice,
    "userIdSignal",
    ()=>userIdSignal,
    "verifyOtpService",
    ()=>verifyOtpService,
    "verifySignUp",
    ()=>verifySignUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$react$2f$dist$2f$signals$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-react/dist/signals.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/@preact/signals-core/dist/signals-core.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.http.ts [app-client] (ecmascript)");
;
;
;
;
const ForgotPasswordOtpType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])({});
const EnabledButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(false);
const LoggedInUserId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(null);
const userIdSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])("");
const ForgotSerice = async ()=>{
// const res = await AppHttp.Post(
//   AppHttp.AUTH_MS_HOST + "/auth/signUp",
//   SignUpSignal.value
// );
// return res;
};
_c = ForgotSerice;
const SignUpSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])({});
const signUpSerice = async ()=>{
// const res = await AppHttp.Post(
//   AppHttp.AUTH_MS_HOST + "/auth/signUp",
//   SignUpSignal.value
// );
// return res;
};
const verifySignUp = async (otp, id)=>{
    try {
        // Use the parameters in the API call
        const response = await fetch("/api/verify-signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp,
                id
            })
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};
const isSinginLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f40$preact$2f$signals$2d$core$2f$dist$2f$signals$2d$core$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signal"])(false);
const onSingin = async (data)=>{
    try {
        isSinginLoading.value = true;
        const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/signin";
        const params = {
            ...data
        };
        const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Post(url, params);
        if (resp?.error || resp.data === null || resp.data.data === null) {
            throw {
                error: {
                    message: "Invalid credentials"
                }
            };
        }
        return resp.data;
    } catch (error) {
        const err = error;
        const messsage = err?.message || err?.error?.message || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstMessages"].WENT_WRONG;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowToast"])(messsage, "danger");
        throw error;
    } finally{
        isSinginLoading.value = false;
    }
};
const forgotPasswordService = async (userid)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/forgot-password";
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Post(url, {
        userid
    });
    return res.data;
};
const verifyOtpService = async (otp, otpId, profileId)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/verify-otp";
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Post(url, {
        otp,
        oid: otpId,
        uid: profileId
    });
    return res.data;
};
const resetPasswordService = async (payload)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MsUrl"].sor + "/auth/reset-password";
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Post(url, payload);
    console.log("ResetPasswordResponse", res);
    return res.data;
};
var _c;
__turbopack_context__.k.register(_c, "ForgotSerice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/utils/app.props.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProps",
    ()=>AppProps,
    "PlatformType",
    ()=>PlatformType
]);
const AppProps = {
    MESSAGE_REQUIRED: "Required",
    MESSAGE_MIN_LENGTH: "Min length required",
    MESSAGE_MAX_LENGTH: "Exceed max length",
    MESSAGE_INVALID_DATA: "Invalid data"
};
var PlatformType = /*#__PURE__*/ function(PlatformType) {
    PlatformType["IOS"] = "ios";
    PlatformType["ANDROID"] = "android";
    PlatformType["MACOS"] = "macos";
    PlatformType["WINDOWS"] = "windows";
    PlatformType["WEB"] = "web";
    return PlatformType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/modules/auth/common/validate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForgotPasswordValidate",
    ()=>ForgotPasswordValidate,
    "LoginValidate",
    ()=>LoginValidate,
    "SignUpValidate",
    ()=>SignUpValidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.props.ts [app-client] (ecmascript)");
;
;
const ForgotPasswordValidate = {
    email: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    userid: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    password: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 6,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 50,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    }
};
const LoginValidate = {
    email: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    password: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    }
};
const SignUpValidate = {
    email: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        },
        pattern: {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegExp"].EMAIL,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_INVALID_DATA
        }
    },
    password: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    },
    name: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    },
    phone: {
        required: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_REQUIRED,
        minLength: {
            value: 2,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MIN_LENGTH
        },
        maxLength: {
            value: 99,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$props$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProps"].MESSAGE_MAX_LENGTH
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthLayout",
    ()=>AuthLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const AuthLayout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full p-1 overflow-y-auto h-[calc(100vh-88px)] flex items-center justify-end m-auto right bg-white dark:bg-black bg-auth-light dark:bg-auth-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[400px] mx-12",
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AuthLayout;
var _c;
__turbopack_context__.k.register(_c, "AuthLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/components/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const Modal = ({ show, onClose, title, children, size = 'md', className = '', showModalBackdrop = true })=>{
    if (!show) return null;
    const sizeClassMap = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        full: 'max-w-full'
    };
    const sizeClass = sizeClassMap[size] || sizeClassMap.md;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal modal-open",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `modal-box ${sizeClass} ${className}`,
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/react-project/timesheet/components/modal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/react-project/timesheet/components/modal.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: showModalBackdrop ? 'modal-backdrop' : '',
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/components/modal.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/components/modal.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/types/type.input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeInput",
    ()=>TypeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-explicit-any */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const TypeInput = ({ control, name, label, value = '', rules = {}, error, className = 'w-full', type = 'text', disabled = false, onChange, onKeyDown, required = false })=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypeInput.useEffect": ()=>{
            setInputValue(value);
        }
    }["TypeInput.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `form-control ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                name: name,
                control: control,
                rules: rules,
                defaultValue: inputValue,
                render: ({ field })=>type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "floating-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...field,
                                placeholder: label || ' ',
                                disabled: disabled,
                                className: "textarea textarea-md textarea-bordered w-full",
                                onKeyDown: onKeyDown,
                                onChange: (e)=>{
                                    field.onChange(e.target.value);
                                    if (onChange) onChange(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, void 0),
                            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    label,
                                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-error ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                        lineNumber: 64,
                                        columnNumber: 32
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "floating-label",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...field,
                                type: type,
                                placeholder: label || ' ',
                                disabled: disabled,
                                className: "input input-md input-bordered w-full",
                                onKeyDown: onKeyDown,
                                onChange: (e)=>{
                                    field.onChange(type === 'number' ? Number(e.target.value) : e.target.value);
                                    if (onChange) onChange(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, void 0),
                            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    label,
                                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-error ml-1",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                        lineNumber: 85,
                                        columnNumber: 32
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "label",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "label-text-alt text-error",
                    children: error.message
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/types/type.input.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TypeInput, "g3WCsqcvSc9WB7w4du2ucRdqd7Y=");
_c = TypeInput;
var _c;
__turbopack_context__.k.register(_c, "TypeInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TenantModal",
    ()=>TenantModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/components/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function TenantModal({ show, onClose, onSuccess }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { control, handleSubmit, formState: { errors }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            tenant: ''
        }
    });
    const onTenantSubmit = async (data)=>{
        if (data.tenant && data.tenant.trim()) {
            if ("TURBOPACK compile-time truthy", 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TENANT_ID"], data.tenant.trim(), true);
            }
            reset();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowToast"])(t('tenantSaved'), 'success');
            onSuccess?.();
            onClose();
        }
    };
    const handleClose = ()=>{
        reset();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$components$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        show: show,
        onClose: handleClose,
        title: t('tenant'),
        showModalBackdrop: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: (e)=>{
                e.preventDefault();
                handleSubmit(onTenantSubmit)();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeInput"], {
                        control: control,
                        error: errors.tenant,
                        label: t('enterTenant'),
                        name: "tenant",
                        rules: {
                            required: t('tenantRequired')
                        },
                        type: "text",
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-action",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            action: "secondary",
                            label: t('okay'),
                            variant: "solid",
                            className: "px-10 btn-pink rounded-lg",
                            htmlType: "submit"
                        }, void 0, false, {
                            fileName: "[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(TenantModal, "io7HMpunL2zzYa8/B+yfXAf6tzw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = TenantModal;
var _c;
__turbopack_context__.k.register(_c, "TenantModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPage",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/modules/auth/common/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/modules/auth/common/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$layouts$2f$auth$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/layouts/auth-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$tenant$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/modules/auth/tenant-modal.tsx [app-client] (ecmascript)");
// import { AuthState } from '@/modules/signin/common/service';
// import { fetchMenuAccess } from '@/modules/menu/common/service';
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/types/type.input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.http.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.router.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/react-project/timesheet/utils/app.util.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function LoginPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const initialTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTenant"])();
    const [showTenantModal, setShowTenantModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialTenant);
    const [hasTenant, setHasTenant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTenant);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPage.useEffect": ()=>{
            const isLogin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLoginUser"])();
            if (isLogin) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppRouter"].HOME);
            }
        }
    }["LoginPage.useEffect"], []);
    const { control, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            email: 'hr@dff-software.com',
            password: ''
        }
    });
    const onSubmit = async (data)=>{
        const requestData = {
            userid: data.email,
            password: btoa(data.password),
            provider: 'email'
        };
        const resp = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSingin"])(requestData);
        if (resp) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOKEN"], resp?.token);
            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JwtDecode"])(resp?.token);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setData(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SESSION_INFO"], decoded);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckSession"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppRouter"].DASHBOARD);
            // Fetch menu access after login using role from signin response
            try {
                console.log('Login: Attempting to fetch menu access');
                console.log('Login: Signin response:', resp);
                console.log('Login: Decoded token:', decoded);
                // Try to get menuRoleId from response data, decoded token, or construct from roles
                const userData = resp?.data || resp;
                const decodedWithRoles = decoded; // JwtDecode returns JwtPayload but token may have custom fields
                console.log('Login: User data:', userData);
                console.log('Login: Decoded with roles:', decodedWithRoles);
                // Try multiple ways to get menuRoleId
                const menuRoleId = userData?.menuRoleId || decodedWithRoles?.menuRoleId || userData?.roleId || decodedWithRoles?.roleId;
                console.log('Login: Extracted menuRoleId:', menuRoleId);
                if (menuRoleId) {
                    console.log('Login: Calling fetchMenuAccess with menuRoleId:', menuRoleId);
                    // await fetchMenuAccess(menuRoleId);
                    console.log('Login: fetchMenuAccess completed');
                } else {
                    console.warn('Login: No menuRoleId found, trying fallback');
                    console.warn('Login: Available fields in userData:', Object.keys(userData || {}));
                    console.warn('Login: Available fields in decoded:', Object.keys(decodedWithRoles || {}));
                // Fallback: Try using "ADMIN_ADMIN" as default for admin users
                }
            } catch (error) {
                // Log error but don't block login
                console.error('Login: Failed to fetch menu access:', error);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppRouter"].DASHBOARD);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowToast"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$dff$2d$util$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstKeys"].ACCESS_DENIED, 'danger');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$layouts$2f$auth$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthLayout"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card bg-base-100 shadow-xl w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-body p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "card-title justify-center text-3xl font-bold mb-8 text-primary-custom text-center w-full",
                                children: t("signIn")
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    handleSubmit(onSubmit)();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeInput"], {
                                            control: control,
                                            error: errors.email,
                                            label: t("email"),
                                            name: "email",
                                            rules: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginValidate"].email,
                                            type: "text",
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeInput"], {
                                            control: control,
                                            error: errors.password,
                                            label: t("password"),
                                            name: "password",
                                            rules: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginValidate"].password,
                                            type: "password",
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    action: "default",
                                                    label: t("forgotPassword"),
                                                    variant: "ghost",
                                                    className: "text-primary-custom hover:bg-inherit hover:shadow-none hover:border-none hover:outline-none px-0",
                                                    onPress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppRouter"].FORGOT_PASSWORD)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$types$2f$type$2e$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    action: "secondary",
                                                    disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSinginLoading"].value,
                                                    isLoading: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSinginLoading"].value,
                                                    label: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$common$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSinginLoading"].value ? t("loading") : t("login"),
                                                    variant: "solid",
                                                    className: "px-10 btn-pink rounded-lg",
                                                    htmlType: "submit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-base-content/70",
                                                    children: [
                                                        t("noAccount"),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-primary cursor-pointer hover:underline font-semibold",
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterChange"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$utils$2f$app$2e$router$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppRouter"].SIGN_UP),
                                                    children: t("signUp")
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        !hasTenant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                                                className: "text-primary cursor-pointer hover:underline font-semibold",
                                                onClick: ()=>setShowTenantModal(true),
                                                children: t("changeTenant")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$modules$2f$auth$2f$tenant$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TenantModal"], {
                show: showTenantModal,
                onClose: ()=>setShowTenantModal(false),
                onSuccess: ()=>setHasTenant(true)
            }, void 0, false, {
                fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/react-project/timesheet/modules/auth/login-page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "EGtAzlwMlxQRr2A+L4W5TXt4twM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_react-project_timesheet_4e7ecfef._.js.map